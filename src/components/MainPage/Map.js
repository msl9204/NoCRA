import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
    border: 1px solid black;
    width: 85vw;
    height: 90vh;
`;

const MapContents = styled.div``;

export default function Map() {
    return (
        <MapContainer>
            <MapContents>MapPage</MapContents>
        </MapContainer>
    );
}
