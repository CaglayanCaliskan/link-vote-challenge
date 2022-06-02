import {Link} from 'react-router-dom';
import LinkItem from './LinkItem';
import {useContext, useState} from 'react';
import LinkContext from '../context/LinkContext';
import Pagination from './Pagination';
//shared components
import DeleteModal from './shared/DeleteModal/DeleteModal';
import Toast from './shared/Toast/Toast';

const LinkList = () => {
  const {linkItems, showDeleteModal, handleFilter} = useContext(LinkContext);
  const [filterActive, setFilterActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = linkItems.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <select
          name='vote-select'
          id='vote-select'
          onChange={(e) => {
            handleFilter(e.target.value);
            e.target.value === 'most'
              ? setFilterActive(true)
              : setFilterActive(false);
          }}
        >
          <option value=''>Order By...</option>
          <option value='most'>Most Voted (Z &#8722;&#62; A)</option>
          <option value='less'>Less Voted (A &#8722;&#62; Z)</option>
        </select>
      </div>
      <div className='link-list'>
        {filterActive ? (
          currentPosts.map((link) => {
            return <LinkItem key={link.id} link={link} />;
          })
        ) : currentPosts.length > 0 ? (
          currentPosts.map((link) => {
            return <LinkItem key={link.id} link={link} />;
          })
        ) : (
          <div className='empy-box'>
            <h1>No Links Yet</h1>
          </div>
        )}
      </div>
      <div className='page-changer'>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={linkItems.length}
          paginate={paginate}
        />
        <Toast item='item' />
      </div>
    </div>
  );
};

export default LinkList;
