import {Link} from 'react-router-dom';
import LinkItem from './LinkItem';
import {useContext} from 'react';
import LinkContext from '../context/LinkContext';
//shared components
import DeleteModal from './shared/DeleteModal/DeleteModal';
import Toast from './shared/Toast/Toast';

const LinkList = () => {
  const {linkItems, showDeleteModal} = useContext(LinkContext);
  return (
    <div className='card list'>
      <DeleteModal showDeleteModal={showDeleteModal} />
      <Link to='/form'>
        <div className='link' style={{background: '#ddd', margin: '0'}}>
          <div className='vote-box'>
            <span>+</span>
          </div>
          <div className='info'>
            <div
              className='title'
              style={{opacity: '0.5', color: `${linkItems < 1 ? 'green' : ''}`}}
            >
              SUBMIT A LINK
            </div>
          </div>
        </div>
      </Link>
      <div className='select-box'>
        <select name='vote-select' id='vote-select'>
          <option value=''>Order By...</option>
          <option value='most'>Most Voted (Z &#8722;&#62; A)</option>
          <option value='less'>Less Voted (A &#8722;&#62; Z)</option>
        </select>
      </div>
      <div className='link-list'>
        {linkItems.length > 0 ? (
          linkItems.map((link) => {
            return <LinkItem key={link.id} link={link} />;
          })
        ) : (
          <div className='empy-box'>
            <h1>No Links Yet</h1>
          </div>
        )}
      </div>
      <div className='page-changer'>
        <ul>
          <li id='page-back'>&#60;</li>
          <li id='page-1'>1</li>
          <li id='page-1'>2</li>
          <li id='page-forward'>&#62;</li>
        </ul>
        <Toast item='item' />
      </div>
    </div>
  );
};

export default LinkList;
