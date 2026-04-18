import { useContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { useBookingsQuery, usePostReviewMutation } from "../../hooks/useBookingQueries";
import { fetchRoomById } from "../../api/rooms";
import BookingRow from "./BookingRow";
import MobileBookingCard from "./MobileBookingCard";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import Spinner from "../ui/Spinner";
import Badge from "../ui/Badge";
import { toast } from "../../lib/toast";
import { FiCalendar } from "react-icons/fi";

const BookingTable = () => {
  const { user } = useContext(AuthContext);
  const { data: myBookings = [], isLoading, isError } = useBookingsQuery(user?.email);
  const postReviewMut = usePostReviewMutation(user?.email);

  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewTarget, setReviewTarget] = useState({ title: "", img: "", roomId: "" });
  const [myRating, setMyRating] = useState(0);

  const uniqueRoomIds = useMemo(() => {
    return [...new Set(myBookings.map((b) => b.roomId).filter(Boolean))];
  }, [myBookings]);

  const roomQueries = useQueries({
    queries: uniqueRoomIds.map((roomId) => ({
      queryKey: ["room", roomId, user?.email],
      queryFn: () => fetchRoomById(roomId, user?.email),
      enabled: Boolean(roomId && user?.email),
      staleTime: 5 * 60 * 1000,
    })),
  });

  const roomMap = useMemo(() => {
    const map = {};
    roomQueries.forEach((q, idx) => {
      if (q.data) map[uniqueRoomIds[idx]] = q.data;
    });
    return map;
  }, [roomQueries, uniqueRoomIds]);

  const openReview = (title, img, roomId) => {
    setReviewTarget({ title, img, roomId });
    setMyRating(0);
    setReviewOpen(true);
  };

  const closeReview = () => {
    setReviewOpen(false);
    setReviewTarget({ title: "", img: "", roomId: "" });
    setMyRating(0);
  };

  const reviewSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const review = form.get("review");
    const { roomId, title: roomTitle, img: roomImg } = reviewTarget;

    if (!review || !myRating) {
      toast.warning("Please add both a rating and review text.");
      return;
    }

    postReviewMut.mutate(
      {
        reviewPayload: {
          roomId, roomImg, roomTitle, review,
          rating: Number(myRating),
          client: user.displayName,
          clientPhoto: user.photoURL,
          clientEmail: user.email,
        },
        roomId,
      },
      {
        onSuccess: () => {
          e.target.reset();
          setMyRating(0);
          closeReview();
          toast.success("Your review was posted!");
        },
        onError: (error) => {
          toast.error(error?.message || "Could not post review.");
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isError) {
    return <p className="text-center text-error py-10">Could not load bookings.</p>;
  }

  if (myBookings.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <div className="w-20 h-20 mx-auto bg-brand-50 rounded-full flex items-center justify-center">
          <FiCalendar className="text-brand-400" size={32} />
        </div>
        <h3 className="text-lg font-semibold text-gray-700">No bookings yet</h3>
        <p className="text-gray-500 text-sm">Start exploring rooms and book your dream stay!</p>
        <Link to="/rooms">
          <Button>Browse Rooms</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-medium text-gray-800">Your Activity</h2>
        <Badge color="blue">{myBookings.length} booking{myBookings.length !== 1 ? 's' : ''}</Badge>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Room</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Package</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Booked</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Check-in</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Check-out</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Offer</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Rate</th>
              <th className="py-3 px-4 text-xs font-medium text-gray-500 text-left uppercase tracking-wider">Total</th>
              <th className="py-3 px-4"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {myBookings.map((booking) => (
              <tr key={booking._id} className="hover:bg-gray-50 transition-colors">
                <BookingRow
                  booking={booking}
                  bookedRoom={roomMap[booking.roomId]}
                  onOpenReview={openReview}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {myBookings.map((booking) => (
          <MobileBookingCard
            key={booking._id}
            booking={booking}
            bookedRoom={roomMap[booking.roomId]}
            onOpenReview={openReview}
          />
        ))}
      </div>

      {/* Review modal */}
      <Modal open={reviewOpen} onClose={closeReview} maxWidth="max-w-lg">
        <div className="p-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Review Your Stay</h3>
          <div className="flex items-center gap-3 mb-4">
            <img className="w-10 h-10 rounded-lg object-cover" src={reviewTarget.img} alt="" />
            <p className="font-semibold text-gray-800">{reviewTarget.title}</p>
          </div>
          <form onSubmit={reviewSubmit} className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-sm text-gray-600">Rate your experience</span>
              <StarRating value={myRating} onChange={setMyRating} size={22} />
            </div>
            <textarea
              placeholder="Share your experience..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none resize-none"
              name="review"
              rows={4}
              required
            />
            <div className="flex justify-end gap-3">
              <Button variant="ghost" type="button" onClick={closeReview}>Cancel</Button>
              <Button type="submit" loading={postReviewMut.isPending}>Post Review</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BookingTable;
