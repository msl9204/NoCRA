import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";
import MapPage from "./Map";
import Footer from "./Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const MiddleContainer = styled.div`
    display: flex;
    flex-grow: 1;
`;

export default function ListView() {
    return (
        <Container>
            <Header />
            <MiddleContainer>
                <Menu />
                <MapPage />
            </MiddleContainer>
            <Footer />
        </Container>
    );
}
