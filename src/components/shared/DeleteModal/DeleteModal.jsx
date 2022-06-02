import {useContext} from 'react';
import './DeleteModal.scss';
import LinkContext from '../../../context/LinkContext';

const DeleteModal = () => {
  const {showDeleteModal, setShowDeleteModal, handleDelete} =
    useContext(LinkContext);
  return (
    <div
      className='modal-background'
      style={{display: `${showDeleteModal.show ? '' : 'none'} `}}
    >
      <div className='modal-container'>
        <div className='modal-title'>Danger</div>
        <div className='modal-body'>
          <h1>Are you sure you want to delete ?</h1>
        </div>
        <h1>{showDeleteModal.link.name}</h1>
        <div className='modal-footer'>
          <button
            className='btn'
            onClick={() => {
              handleDelete(showDeleteModal.link);
              setShowDeleteModal({
                show: false,
                link: {},
              });
            }}
          >
            Approve
          </button>
          <button
            className='btn'
            onClick={() =>
              setShowDeleteModal({
                ...showDeleteModal,
                show: false,
              })
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
