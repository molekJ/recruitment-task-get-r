import Navbar from "./components/Navbar";
import InteractivBar from "./components/InteractiveBar";
import { GlobalStyle } from "./GlobalStyles";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [week, setWeek] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <InteractivBar week={week} setWeek={setWeek} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
