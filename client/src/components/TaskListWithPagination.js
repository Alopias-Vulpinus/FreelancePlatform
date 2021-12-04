import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import {TaskList} from './TaskList'

function PaginatedItems({ itemsPerPage, tasks}) {
  const [currentItems, setCurrentItems] = useState(tasks);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tasks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tasks.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, tasks]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tasks.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <TaskList tasks={currentItems} />
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

export const TaskListWithPagination = ({tasks}) => {
    return (
    <>
        <div className='pagination_container'>
            <PaginatedItems itemsPerPage={4} tasks={tasks}/>
        </div>
    </>)
}