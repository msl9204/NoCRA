import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 10vh;
`;

const HeaderContents = styled.div``;

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContents>Where is AnimalHospital?</HeaderContents>
        </HeaderContainer>
    );
}
