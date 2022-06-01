import {Link} from 'react-router-dom';
import Toast from './shared/Toast/Toast';
const LinkForm = () => {
  return (
    <form className='card form'>
      <div className='move-back'>
        <Link to='/'> &#8592; Return to List</Link>
      </div>
      <h2 htmlFor='link'>Add New Link</h2>
      <div className='form-group'>
        <label htmlFor='link-name'>Link Name:</label>
        <input
          type='text'
          className='form-control'
          id='link-name'
          placeholder='MDN'
        />
        <label htmlFor='link-url'>Link Url:</label>
        <input
          type='text'
          className='form-control'
          id='link-url'
          placeholder='https://caglayancaliskan.com/'
        />
        <div className='button'>
          <button className='btn submit' type='submit'>
            Add
          </button>
        </div>
      </div>
      <Toast item='item' />
    </form>
  );
};

export default LinkForm;
