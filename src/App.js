import Navbar from "./components/Navbar";
import InteractivBar from "./components/InteractiveBar";
import { GlobalStyle } from "./GlobalStyles";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <InteractivBar></InteractivBar>
      <Content />
      <Footer />
    </>
  );
}

export default App;
