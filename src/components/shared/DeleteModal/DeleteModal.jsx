import './DeleteModal.scss';

const DeleteModal = ({item}) => {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-title'>Danger</div>
        <div className='modal-body'>
          <h1>Are you sure you want to delete ?</h1>
        </div>
        <h1>{item}</h1>
        <div className='modal-footer'>
          <button className='btn'>Approve</button>
          <button className='btn'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
