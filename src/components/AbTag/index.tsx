import React from "react";
import styled from "styled-components";

export interface AbTagProps {
    texto: string;
}

const AbTagEstilizado = styled.div`
    padding: 24px 32px;
    color: #fff;
    background-color: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

export const AbTag = ({ texto }: AbTagProps) => {
    return (
        <AbTagEstilizado>
            {texto}
        </AbTagEstilizado>
    );
}