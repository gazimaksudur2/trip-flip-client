import { useContext, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthContext } from "../../providers/AuthProvider";
import { useCreateBookingMutation } from "../../hooks/useBookingQueries";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Badge from "../ui/Badge";
import { toast } from "../../lib/toast";

const ROOM_OPTIONS = [
  { label: "1 room, 2 travelers", rooms: 1, travelers: 2 },
  { label: "1 room, 1 traveler", rooms: 1, travelers: 1 },
  { label: "2 rooms, 3 travelers", rooms: 2, travelers: 3 },
  { label: "2 rooms, 4 travelers", rooms: 2, travelers: 4 },
  { label: "3 rooms, 5 travelers", rooms: 3, travelers: 5 },
];

const CHILD_OPTIONS = [
  { label: "None", count: 0 },
  { label: "1 child", count: 1 },
  { label: "2 children", count: 2 },
  { label: "3 children", count: 3 },
  { label: "4 children", count: 4 },
];

const staySchema = z.object({
  checkin: z.string().min(1, "Check-in date is required"),
  checkout: z.string().min(1, "Check-out date is required"),
  roomOption: z.string().min(1, "Select travelers"),
  childOption: z.string().min(1, "Select children option"),
  offer: z.number(),
});

const paySchema = z.object({
  phone: z.string().min(8, "Enter a valid phone number"),
  acceptDemo: z.boolean().refine((v) => v === true, { message: "Confirm this is a demo booking" }),
});

const BookModal = ({ setShowBookModal, special_offers = [], fare, roomId, roomTitle = "Selected room" }) => {
  const { user } = useContext(AuthContext);
  const createBookingMut = useCreateBookingMutation(user?.email);
  const [step, setStep] = useState(1);

  const stayForm = useForm({
    resolver: zodResolver(staySchema),
    defaultValues: { checkin: "", checkout: "", roomOption: "", childOption: "", offer: 0 },
  });

  const payForm = useForm({
    resolver: zodResolver(paySchema),
    defaultValues: { phone: "", acceptDemo: false },
  });

  const watchedStay = stayForm.watch();
  const selectedRoom = ROOM_OPTIONS.find((o) => o.label === watchedStay.roomOption);
  const selectedChild = CHILD_OPTIONS.find((o) => o.label === watchedStay.childOption);

  const pricing = useMemo(() => {
    const rooms = selectedRoom?.rooms || 0;
    const travelers = selectedRoom?.travelers || 0;
    const children = selectedChild?.count || 0;
    const offerPercent = watchedStay.offer || 0;

    const adultFare = travelers & 1 ? (rooms - 1) * fare + fare * 0.8 : rooms * fare;
    const childFare = children * fare * 0.4;
    const subtotal = adultFare + childFare;
    const discount = subtotal * offerPercent * 0.01;
    const grandTotal = subtotal - discount;

    return { adultFare, childFare, discount, grandTotal, rooms, travelers, children, offerPercent };
  }, [selectedRoom, selectedChild, watchedStay.offer, fare]);

  const handleStayNext = stayForm.handleSubmit(() => setStep(2));

  const handlePaySubmit = payForm.handleSubmit(async (data) => {
    const bookedAt = new Date().toISOString().slice(0, 10);
    try {
      await createBookingMut.mutateAsync({
        bookedAt,
        checkin: watchedStay.checkin,
        checkout: watchedStay.checkout,
        plan: {
          room: watchedStay.roomOption,
          children: watchedStay.childOption,
          offer: watchedStay.offer,
        },
        roomId,
        grandTotal: pricing.grandTotal,
        phoneNo: data.phone,
        cardNo: "DEMO-NOT-REAL",
        code: "000",
        client: user.displayName,
        clientPhoto: user.photoURL,
        clientEmail: user.email,
      });
      setShowBookModal(false);
      toast.success("Booking created successfully!");
    } catch (error) {
      toast.error(error?.message || "Booking failed. Try again.");
    }
  });

  return (
    <Modal open={true} onClose={() => setShowBookModal(false)} maxWidth="max-w-2xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 font-jakarta">Book Your Stay</h2>
            <p className="text-sm text-brand-500">{roomTitle}</p>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  step >= s ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-6 h-0.5 ${step > s ? 'bg-brand-500' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleStayNext} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Check-in"
                type="date"
                error={stayForm.formState.errors.checkin?.message}
                {...stayForm.register("checkin")}
              />
              <Input
                label="Check-out"
                type="date"
                error={stayForm.formState.errors.checkout?.message}
                {...stayForm.register("checkout")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Travelers</label>
                <Controller
                  name="roomOption"
                  control={stayForm.control}
                  render={({ field }) => (
                    <select {...field} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none">
                      <option value="">Select...</option>
                      {ROOM_OPTIONS.map((o) => <option key={o.label} value={o.label}>{o.label}</option>)}
                    </select>
                  )}
                />
                {stayForm.formState.errors.roomOption && (
                  <p className="mt-1 text-sm text-error">{stayForm.formState.errors.roomOption.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Children</label>
                <Controller
                  name="childOption"
                  control={stayForm.control}
                  render={({ field }) => (
                    <select {...field} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none">
                      <option value="">Select...</option>
                      {CHILD_OPTIONS.map((o) => <option key={o.label} value={o.label}>{o.label}</option>)}
                    </select>
                  )}
                />
                {stayForm.formState.errors.childOption && (
                  <p className="mt-1 text-sm text-error">{stayForm.formState.errors.childOption.message}</p>
                )}
              </div>
            </div>

            {special_offers.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Special Offers <span className="text-xs text-gray-400 font-normal">(pick one)</span></h4>
                <div className="flex flex-wrap gap-2">
                  {special_offers.map((offr, idx) => {
                    const isSelected = watchedStay.offer === offr.value;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => stayForm.setValue("offer", isSelected ? 0 : offr.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          isSelected
                            ? 'bg-brand-500 text-white border-brand-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-brand-400'
                        }`}
                      >
                        {offr.offer} — {offr.value}% off
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button type="submit">Continue to Pricing</Button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-xs text-orange-600 mb-1">Adult Fare</p>
                <p className="text-xl font-bold text-orange-700">${pricing.adultFare.toFixed(2)}</p>
                {pricing.travelers & 1 ? (
                  <p className="text-xs text-orange-500 mt-1">Odd-traveler discount applied</p>
                ) : null}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs text-blue-600 mb-1">Child Fare</p>
                <p className="text-xl font-bold text-blue-700">${pricing.childFare.toFixed(2)}</p>
                {pricing.children > 0 && (
                  <p className="text-xs text-blue-500 mt-1">60% discount per child</p>
                )}
              </div>
            </div>

            {pricing.discount > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-600">Special Offer Discount</p>
                  <Badge color="amber">{pricing.offerPercent}% off</Badge>
                </div>
                <p className="text-xl font-bold text-amber-700">-${pricing.discount.toFixed(2)}</p>
              </div>
            )}

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-green-800">Grand Total</p>
              <p className="text-2xl font-bold text-green-700">${pricing.grandTotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)}>Continue to Confirm</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handlePaySubmit} className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Room</span>
                <span className="font-medium">{roomTitle}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Dates</span>
                <span className="font-medium">{watchedStay.checkin} → {watchedStay.checkout}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total</span>
                <span className="font-bold text-green-600">${pricing.grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 bg-amber-50 border border-amber-200 rounded-lg p-3">
              Payments are simulated for this portfolio build. No real card data is collected.
            </p>

            <Input
              label="Phone Number"
              type="tel"
              inputMode="tel"
              placeholder="Your phone number"
              error={payForm.formState.errors.phone?.message}
              {...payForm.register("phone")}
            />

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary mt-0.5"
                {...payForm.register("acceptDemo")}
              />
              <span className="text-sm text-gray-600">
                I understand this is a demo booking and no real card will be charged.
              </span>
            </label>
            {payForm.formState.errors.acceptDemo && (
              <p className="text-sm text-error">{payForm.formState.errors.acceptDemo.message}</p>
            )}

            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
              <Button type="submit" loading={createBookingMut.isPending}>
                Confirm Demo Booking
              </Button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default BookModal;
