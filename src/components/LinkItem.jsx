import {useState, useContext} from 'react';
import LinkContext from '../context/LinkContext';

const LinkItem = ({link}) => {
  const {setShowDeleteModal, handleUpdate} = useContext(LinkContext);
  const [deleteBox, setDeleteBox] = useState(false);
  return (
    <div
      className='link'
      onMouseEnter={() => setDeleteBox(true)}
      onMouseLeave={() => setDeleteBox(false)}
    >
      <div className='vote-box'>
        <span>{link.point}</span>
        <p>POINTS</p>
      </div>
      <div className='info'>
        <div className='title'>{link.name}</div>
        <div className='url'>{link.url}</div>
        <div className='vote-update'>
          <div
            className='vote vote-up'
            onClick={(e) => {
              handleUpdate(link, e.target.className);
            }}
          >
            {' '}
            &uarr; Up Vote
          </div>
          <div
            className='vote vote-down'
            onClick={(e) => handleUpdate(link, e.target.className)}
          >
            &#8595; Down Vote
          </div>
        </div>
      </div>
      <div
        className='btn delete-box'
        style={{display: `${deleteBox ? '' : 'none'}`}}
        onClick={() =>
          setShowDeleteModal({
            link: link,
            show: true,
          })
        }
      >
        x
      </div>
    </div>
  );
};

export default LinkItem;
