import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';
import { darken } from 'polished';

export const MyPaginationItem = styled(Pagination.Item)`
  a,
  span {
    background: #f16550;
    color: white;
  }
  > span {
    background-color: ${darken(0.1, '#f16550')} !important;
    color: white;
    border-color: ${darken(0.1, '#f16550')} !important;
  }
`;
