import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
    border: 1px solid black;
    width: 15vw;
    height: 90vh;
`;

const MenuContents = styled.div``;

export default function Menu() {
    return (
        <MenuContainer>
            <MenuContents>Menu</MenuContents>
        </MenuContainer>
    );
}
