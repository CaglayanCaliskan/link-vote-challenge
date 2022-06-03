import React from 'react';

const Pagination = ({postPerPage, totalPosts, paginate, currentPage}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? 'page-item active' : 'page-item'
            }
          >
            <p className='page-link' onClick={() => paginate(number)}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
