import { combineReducers } from 'redux';

import Book from './book/reducer';

export default combineReducers({
  book: Book,
});
