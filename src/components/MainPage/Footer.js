import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 10vh;
`;

const FooterContents = styled.div``;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContents>Footer</FooterContents>
        </FooterContainer>
    );
}
