import { BooksAction, BooksActionTypes } from "./../types/types";
import { Content } from "./../types/types";

const initialState: Content = {
  books: [],
  loading: false,
  error: null,
};

export const booksReducer = (
  state = initialState,
  action: BooksAction
): Content => {
  switch (action.type) {
    case BooksActionTypes.BOOKS_TEXT:
      return { loading: true, error: null, books: [] };
    case BooksActionTypes.BOOKS_SUCCESS:
      return { loading: false, error: null, books: action.payload };
    case BooksActionTypes.BOOKS_ERROR:
      return { loading: false, error: action.payload, books: [] };
    default:
      return state;
  }
};
