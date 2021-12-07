import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import {ProfileList} from './ProfileList'

function PaginatedItems({ itemsPerPage, profiles}) {
  const [currentItems, setCurrentItems] = useState(profiles);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(profiles.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(profiles.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, profiles]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % profiles.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProfileList profiles={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        className='block-center pagination'
      />
    </>
  );
}

export const ProfileListWithPagination = ({profiles}) => {
    return (
    <>
        <div className='pagination_container'>
            <PaginatedItems itemsPerPage={4} profiles={profiles}/>
        </div>
    </>)
}