export const endpoints = {
    getJsBooks: (book:string):string => `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyDfywqycZecZkEo_YTtiemHMHTmaSM2Or0` 
}