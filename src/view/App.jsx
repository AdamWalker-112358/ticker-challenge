import React from "react";
import Ticker from "./Ticker";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <h1>
        {"Ticker challenge "}<span role="img" aria-label="confetti">🎉</span>
      </h1>
      <Ticker message="HELLO TICKER" />
    </Container>
  );
}
export default App;
const Container = styled.div`
  text-align: center;
  h1 {
    padding-bottom: 2rem;
  }
`;
