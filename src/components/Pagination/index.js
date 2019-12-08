import React from 'react';
import { Pagination } from 'react-bootstrap';

import { MyPaginationItem } from './styles';

export default function MyPagination({ total, rowsPerPage, page, pageChange }) {
  const numPage = total / rowsPerPage;
  const items = [];
  for (let number = 0; number < numPage; number++) {
    items.push(
      <MyPaginationItem
        key={number}
        active={number === Number(page)}
        onClick={e => pageChange(number)}
      >
        {number + 1}
      </MyPaginationItem>
    );
  }

  return <Pagination>{items} </Pagination>;
}
