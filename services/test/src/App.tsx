import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
// @ts-ignore
import { vars, classes } from "@hojoon/themes";
import styled from "@emotion/styled";

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text className="heading3xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <Text>font color ={vars.colors.$static.light.red[500]}</Text>
        <Text className="heading2xl">{vars.box.radii.base}</Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

function App() {
  console.log("!!", classes.typography);
  return <View />;
}

export default App;

const Text = styled.p`
  color: ${vars.colors.$static.light.red[500]};
`;
