import produce from 'immer';

const INITIAL_STATE = {
  bookList: [],
  page: 0,
  total: 0,
};

export default function book(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@book/FETCH_BOOKS_SUCESS':
      return { bookList: action.books, page: action.page, total: action.total };

    default:
      return state;
  }
}
