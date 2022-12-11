export interface Content {
  books: any[];
  loading: boolean;
  error: null | string;
}

export interface CardBooks {
  books: any[]
}

export enum BooksActionTypes {
  BOOKS_TEXT = "BOOKS_TEXT",
  BOOKS_ERROR = "BOOKS_ERROR",
  BOOKS_SUCCESS = "BOOKS_SUCCESS",
}

interface FetchBooks {
  type: BooksActionTypes.BOOKS_TEXT;
}

interface FetchBooksSuccess {
  type: BooksActionTypes.BOOKS_SUCCESS;
  payload: any[];
}

interface BooksError {
  type: BooksActionTypes.BOOKS_ERROR;
  payload: string;
}


export type BooksAction = FetchBooks | BooksError | FetchBooksSuccess;
