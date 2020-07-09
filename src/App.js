import React from "react";
import ListView from "./components/MainPage/ListView";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,body {
        margin: 0px;
        padding: 0px;
    }

    *{
        box-sizing: border-box;
    }


`;

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ListView />
        </React.Fragment>
    );
}

export default App;
