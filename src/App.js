import Navbar from "./components/Navbar";
import InteractivBar from "./components/InteractiveBar";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <InteractivBar></InteractivBar>
    </>
  );
}

export default App;
