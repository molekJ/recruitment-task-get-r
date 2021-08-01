import Navbar from "./components/Navbar";
import InteractivBar from "./components/InteractiveBar";
import { GlobalStyle } from "./GlobalStyles";
import Content from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <InteractivBar></InteractivBar>
      <Content />
    </>
  );
}

export default App;
