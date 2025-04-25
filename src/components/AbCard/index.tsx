import React from "react";
import styled from "styled-components";

interface AbCardProps {
    children: React.ReactNode;
}

const AbCardEstilizado = styled.div`
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 48px;
    box-shadow: 0px 4px 4px #00000040;
`

export const AbCard = ({ children }: AbCardProps) => {
    return (
        <AbCardEstilizado>
            {children}
        </AbCardEstilizado>
    );
}