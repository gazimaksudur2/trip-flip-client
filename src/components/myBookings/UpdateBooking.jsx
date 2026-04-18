import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthContext } from "../../providers/AuthProvider";
import { useUpdateBookingMutation } from "../../hooks/useBookingQueries";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { toast } from "../../lib/toast";

const updateSchema = z.object({
  checkin: z.string().min(1, "Check-in is required"),
  checkout: z.string().min(1, "Check-out is required"),
  room: z.string().min(1, "Select travelers"),
  children: z.string().min(1, "Select children"),
}).refine((data) => data.checkout > data.checkin, {
  message: "Check-out must be after check-in",
  path: ["checkout"],
});

const UpdateBooking = ({ booking, roomInfo, setShowUpdateModal }) => {
  const { user } = useContext(AuthContext);
  const updateMut = useUpdateBookingMutation(user?.email);

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      checkin: booking?.checkin || "",
      checkout: booking?.checkout || "",
      room: booking?.plan?.room || "",
      children: booking?.plan?.children || "",
    },
  });

  const onSubmit = (data) => {
    const updatedAt = new Date().toISOString().slice(0, 10);
    updateMut.mutate(
      {
        id: booking._id,
        payload: {
          updatedAt,
          checkIn: data.checkin,
          checkOut: data.checkout,
          myPlan: {
            room: data.room,
            children: data.children,
            offer: booking.plan.offer,
          },
        },
      },
      {
        onSuccess: () => {
          toast.success("Booking updated!");
          setShowUpdateModal(false);
        },
        onError: (error) => {
          toast.error(error?.message || "Update failed.");
        },
      }
    );
  };

  return (
    <Modal open={true} onClose={() => setShowUpdateModal(false)} maxWidth="max-w-md">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Update Booking</h3>
        <p className="text-sm text-brand-500 mb-5">{roomInfo?.room_title}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Check-in"
              type="date"
              error={errors.checkin?.message}
              {...register("checkin")}
            />
            <Input
              label="Check-out"
              type="date"
              error={errors.checkout?.message}
              {...register("checkout")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Travelers</label>
              <Controller
                name="room"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none">
                    <option value="">Select...</option>
                    <option>1 room, 2 travelers</option>
                    <option>1 room, 1 travelers</option>
                    <option>2 room, 3 travelers</option>
                    <option>2 room, 4 travelers</option>
                    <option>3 room, 5 travelers</option>
                  </select>
                )}
              />
              {errors.room && <p className="mt-1 text-sm text-error">{errors.room.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Children</label>
              <Controller
                name="children"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none">
                    <option value="">Select...</option>
                    <option>None</option>
                    <option>1 child</option>
                    <option>2 children</option>
                    <option>3 children</option>
                    <option>4 children</option>
                  </select>
                )}
              />
              {errors.children && <p className="mt-1 text-sm text-error">{errors.children.message}</p>}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="ghost" type="button" onClick={() => setShowUpdateModal(false)}>Cancel</Button>
            <Button type="submit" loading={updateMut.isPending}>Update Booking</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateBooking;
