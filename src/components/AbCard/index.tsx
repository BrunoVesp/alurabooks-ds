import React from "react";
import styled from "styled-components";

interface CardProps {
    children: React.ReactNode;
}

const CardStyled = styled.div`
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 48px;
    box-shadow: 0px 4px 4px #00000040;
`

export const Card = ({ children }: CardProps) => {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    );
}