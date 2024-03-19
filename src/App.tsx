import { createGlobalStyle } from "styled-components";
import Multiplayer from "./multiplayer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Multiplayer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

body{
  background-color: #1A2A33;
  display:flex;
  justify-content:center;
  text-align: center;
  margin-top: 20px;  
  
}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;
