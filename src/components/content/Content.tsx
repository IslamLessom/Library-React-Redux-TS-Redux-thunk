import React, { useEffect, useState } from "react";
import images from "../../assets/picwish.png";

//TYPES
import { Content, CardBooks } from "../../redux/types/types";

//REDUX ACTION
import { fetchBooks } from "../../redux/action/booksAction";

import {
  ContentDiv,
  NamePage,
  ImagesContent,
  ContentBigText,
  ContentSmallText,
  ContentInput,
  ContentSearchBook,
  ContentButton,
  Form,
  NameBooksPage,
  CardContainer,
  Card,
  ImageCard,
  NameBook,
  SmallDesBook,
  ButtonBook,
  ContentName,
  NameAuthor,
  LinkA,
} from "./Content.element";

import { BooksActions } from "../../redux/hooks/booksAction";
import { useTypedSelector } from "../../redux/hooks/booksTypedSelector";

const Contents = () => {
  const [result, setResult] = useState<Content[]>([]);
  const [book, setBook] = useState<string>("");

  const { books, loading, error } = useTypedSelector((state) => state.books);
  const { fetchBooks } = BooksActions();

  useEffect(() => {
    fetchBooks(book);
  }, []);

  function handleChange(event: { target: HTMLInputElement }) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(books);
    fetchBooks(book);
  }

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }

  return (
    <>
      <ContentDiv>
        <NamePage>
          <ContentBigText>Online/Offline Library</ContentBigText>
          <ContentSmallText>
            Библиотека находится на ул.Победы. Создайте бронь сегодня , а
            заберите завтра
          </ContentSmallText>
          <ContentSearchBook>
            <Form onSubmit={handleSubmit}>
              <ContentInput
                onChange={handleChange}
                placeholder="Найди книгу здесь"
              />
              <ContentButton>Искать</ContentButton>
            </Form>
          </ContentSearchBook>
        </NamePage>
        <ImagesContent src={images} />
      </ContentDiv>
      <NameBooksPage>Результат поиска</NameBooksPage>
      <CardContainer>
        {books.map((res, index) => {
          console.log(res.accessInfo.webReaderLink);
          return (
            <Card key={index}>
              <ImageCard src={res.volumeInfo.imageLinks.thumbnail} />
              <NameBook>{res.volumeInfo.title}</NameBook>
              <SmallDesBook>{res.volumeInfo.description}</SmallDesBook>
              <NameAuthor>{res.volumeInfo.authors}</NameAuthor>
              <ButtonBook><LinkA href={res.accessInfo.webReaderLink}>Читать книгу</LinkA></ButtonBook>
              <ButtonBook><LinkA href={res.volumeInfo.infoLink}>Узнать подробней</LinkA></ButtonBook>
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
};

export default Contents;
