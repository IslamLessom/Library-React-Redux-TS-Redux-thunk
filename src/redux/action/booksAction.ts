import axios from "axios";
import { Dispatch } from "redux";
import { endpoints } from "../../api";
import { BooksAction, BooksActionTypes } from "../types/types";


export const fetchBooks = (book:string) => {
  console.log('action----' + book)

  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.BOOKS_TEXT });
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyDfywqycZecZkEo_YTtiemHMHTmaSM2Or0`
      );
      dispatch({
        type: BooksActionTypes.BOOKS_SUCCESS,
        payload: response.data.items,
      });
    } catch (e) {
      dispatch({
        type: BooksActionTypes.BOOKS_ERROR,
        payload: "error",
      });
    }
  };
};
