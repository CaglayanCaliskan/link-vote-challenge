import {Link} from 'react-router-dom';
import Toast from './shared/Toast/Toast';
import {useContext, useState} from 'react';
import LinkContext from '../context/LinkContext';

const LinkForm = () => {
  const {toast, handleAdd, linkItems} = useContext(LinkContext);

  const [newLinkItem, setNewLinkItem] = useState({
    id: linkItems.length,
    name: '',
    url: '',
    point: 0,
  });

  return (
    <form className='card form'>
      <div className='move-back'>
        <Link to='/'>
          <p style={{color: `${toast ? 'orange' : ''}`}}>
            &#8592; Return to List
          </p>{' '}
        </Link>
      </div>
      <h2 htmlFor='link'>Add New Link</h2>
      <div className='form-group'>
        <label htmlFor='link-name'>Link Name:</label>
        <input
          type='text'
          className='form-control'
          id='link-name'
          placeholder='MDN'
          required
          value={newLinkItem.name}
          onChange={(e) =>
            setNewLinkItem({...newLinkItem, name: e.target.value})
          }
        />
        <label htmlFor='link-url'>Link Url:</label>
        <input
          type='text'
          className='form-control'
          id='link-url'
          placeholder='https://caglayancaliskan.com/'
          required
          value={newLinkItem.url}
          onChange={(e) =>
            setNewLinkItem({...newLinkItem, url: e.target.value})
          }
        />
        <div className='button'>
          <button
            className='btn submit'
            type='submit'
            disabled={!newLinkItem.name || !newLinkItem.url}
            onClick={(e) => {
              e.preventDefault();
              setNewLinkItem({
                ...newLinkItem,
                id: linkItems.length + 1,
              });
              handleAdd(newLinkItem);
            }}
          >
            Add
          </button>
        </div>
      </div>
      <Toast item='added' />
    </form>
  );
};

export default LinkForm;
