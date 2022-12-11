import {
  ContentDiv,
  HeaderContent,
  ContentContainer,
  FooterContent,
  LayoutContent,
} from "./App.element";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <ContentDiv>
      <GlobalStyle />
      <LayoutContent>
        <HeaderContent>
          <Navbar />
        </HeaderContent>
        <ContentContainer>
          <Content />
        </ContentContainer>
      </LayoutContent>
    </ContentDiv>
  );
}

export default App;
