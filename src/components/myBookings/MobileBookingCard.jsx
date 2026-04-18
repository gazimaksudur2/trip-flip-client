import { useContext } from 'react';
import { GoCodeReview } from 'react-icons/go';
import { FiTrash2 } from 'react-icons/fi';
import UpdateButton from './UpdateButton';
import Badge from '../ui/Badge';
import { AuthContext } from '../../providers/AuthProvider';
import { useDeleteBookingMutation } from '../../hooks/useBookingQueries';
import { toast } from '../../lib/toast';

const MobileBookingCard = ({ booking, bookedRoom, onOpenReview }) => {
  const { user } = useContext(AuthContext);
  const { bookedAt, checkin, checkout, plan, grandTotal } = booking;
  const deleteMut = useDeleteBookingMutation(user?.email);

  const handleCancel = () => {
    if (!window.confirm('Cancel this booking?')) return;
    deleteMut.mutate(booking._id, {
      onSuccess: () => toast.success('Booking cancelled.'),
      onError: (err) => toast.error(err?.message || 'Could not cancel.'),
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 rounded-lg object-cover" src={bookedRoom?.homeImg} alt="" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-800 truncate">{bookedRoom?.room_title || 'Loading...'}</p>
          <Badge color="amber">{plan?.room || '-'}</Badge>
        </div>
        {grandTotal && (
          <span className="text-lg font-bold text-green-600">${grandTotal.toFixed(2)}</span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
        <div>
          <p className="text-gray-400">Booked</p>
          <p className="font-medium text-gray-700">{bookedAt}</p>
        </div>
        <div>
          <p className="text-gray-400">Check-in</p>
          <p className="font-medium text-gray-700">{checkin}</p>
        </div>
        <div>
          <p className="text-gray-400">Check-out</p>
          <p className="font-medium text-gray-700">{checkout}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex gap-2">
          <Badge color="green">{plan?.offer || 0}% off</Badge>
          <Badge color="pink">${bookedRoom?.price_per_night}/night</Badge>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            title="Write Review"
            className="p-2 text-gray-400 hover:text-green-500 rounded-lg transition-colors"
            onClick={() => onOpenReview(bookedRoom?.room_title, bookedRoom?.homeImg, bookedRoom?._id)}
            disabled={!bookedRoom}
          >
            <GoCodeReview size={16} />
          </button>
          <button
            type="button"
            title="Cancel Booking"
            onClick={handleCancel}
            className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
            disabled={deleteMut.isPending}
          >
            <FiTrash2 size={16} />
          </button>
          <UpdateButton booking={booking} roomInfo={bookedRoom} />
        </div>
      </div>
    </div>
  );
};

export default MobileBookingCard;
