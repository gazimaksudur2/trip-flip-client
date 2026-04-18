import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import UpdateBooking from './UpdateBooking';

const UpdateButton = ({ booking, roomInfo }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <button
        type="button"
        title="Edit Dates"
        onClick={() => setShowUpdateModal(true)}
        className="p-1.5 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors"
      >
        <FiEdit2 size={16} />
      </button>
      {showUpdateModal && (
        <UpdateBooking booking={booking} roomInfo={roomInfo} setShowUpdateModal={setShowUpdateModal} />
      )}
    </>
  );
};

export default UpdateButton;
