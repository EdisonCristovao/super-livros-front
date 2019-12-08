import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { fetchBooksSucess } from './actions';

function* fetchBooks({ filter, dateFrom, dateTo, page, rowsPerPage }) {
  try {
    const params = {
      filter,
      dateFrom,
      dateTo,
      page,
      pageSize: rowsPerPage,
    };

    if (dateFrom !== 0 && dateTo) console.log(params);
    const books = yield call(api.get, `/books`, {
      params,
    });

    yield put(fetchBooksSucess(books.data));

    return books;
  } catch (error) {
    toast.error('Erro ao buscar livros');

    return error;
  }
}

export default all([takeLatest('@book/FETCH_BOOKS_REQUEST', fetchBooks)]);
