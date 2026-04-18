import { useContext } from 'react';
import { GoCodeReview } from 'react-icons/go';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import UpdateButton from './UpdateButton';
import Badge from '../ui/Badge';
import { AuthContext } from '../../providers/AuthProvider';
import { useDeleteBookingMutation } from '../../hooks/useBookingQueries';
import { toast } from '../../lib/toast';

const BookingRow = ({ booking, bookedRoom, onOpenReview }) => {
  const { user } = useContext(AuthContext);
  const { bookedAt, checkin, checkout, plan, grandTotal } = booking;
  const deleteMut = useDeleteBookingMutation(user?.email);

  const handleCancel = () => {
    if (!window.confirm('Cancel this booking? You can book again later if rooms are still available.')) return;
    deleteMut.mutate(booking._id, {
      onSuccess: () => toast.success('Booking cancelled.'),
      onError: (err) => toast.error(err?.message || 'Could not cancel booking.'),
    });
  };

  const descPreview = bookedRoom?.room_description
    ? `${bookedRoom.room_description.slice(0, 25)}...`
    : '...';

  return (
    <>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-lg object-cover" src={bookedRoom?.homeImg} alt="" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">{bookedRoom?.room_title}</p>
            <p className="text-xs text-gray-400 truncate">{descPreview}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <Badge color="amber">{plan?.room || '-'}</Badge>
      </td>
      <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{bookedAt}</td>
      <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{checkin}</td>
      <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{checkout}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <Badge color="green">{plan?.offer || 0}%</Badge>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <Badge color="pink">${bookedRoom?.price_per_night}</Badge>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className="text-sm font-semibold text-gray-800">${grandTotal ? grandTotal.toFixed(2) : '-'}</span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <button
            type="button"
            title="Write Review"
            className="p-1.5 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
            onClick={() => onOpenReview(bookedRoom?.room_title, bookedRoom?.homeImg, bookedRoom?._id)}
            disabled={!bookedRoom}
          >
            <GoCodeReview size={16} />
          </button>
          <button
            type="button"
            title="Cancel Booking"
            onClick={handleCancel}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            disabled={deleteMut.isPending}
          >
            <FiTrash2 size={16} />
          </button>
          <UpdateButton booking={booking} roomInfo={bookedRoom} />
        </div>
      </td>
    </>
  );
};

export default BookingRow;
