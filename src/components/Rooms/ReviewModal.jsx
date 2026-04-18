import Modal from "../ui/Modal";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import Spinner from "../ui/Spinner";
import { useRoomReviewsQuery } from "../../hooks/useReviewQueries";

const ReviewModal = ({ setShowModal, id }) => {
  const { data: reviews = [], isLoading } = useRoomReviewsQuery(id);

  return (
    <Modal open={true} onClose={() => setShowModal(false)} maxWidth="max-w-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Guest Reviews</h3>

        <div className="max-h-[50vh] overflow-y-auto space-y-4 pr-1">
          {isLoading && (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          )}

          {!isLoading && reviews.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No reviews for this room yet.</p>
            </div>
          )}

          {!isLoading && reviews.map((review) => (
            <div key={review._id} className="border border-gray-100 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={review.clientPhoto}
                  alt={review.client}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm truncate">{review.client}</p>
                  <p className="text-xs text-gray-400 truncate">
                    {review.clientEmail || "Guest reviewer"}
                  </p>
                </div>
                <StarRating value={review.rating} readOnly size={14} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-100 mt-4">
          <Button variant="ghost" onClick={() => setShowModal(false)}>Close</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
