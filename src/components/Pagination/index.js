import React from 'react';
import { Pagination } from 'react-bootstrap';
import { chain } from 'lodash';
// import { Container } from './styles';

export default function MyPagination({ total, rowsPerPage, page, pageChange }) {
  const numPage = total / rowsPerPage;
  const items = [];
  for (let number = 0; number < numPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Number(page)}
        onClick={e => pageChange(number)}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  return <Pagination>{items} </Pagination>;
}
