import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InputQuantidadeEstilizado = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-family: Arial, Helvetica, sans-serif;

    label {
        font-weight: 700;
    }

    div {
        display: flex;
        align-items: center;
        gap: 12px;

        button {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: #002F52;
            color: #fff;
            box-shadow: 0px 2px 4px #00000040;
            font-size: 24px;
            line-height: 100%;
            cursor: pointer;
        }

        span {
            color: #002F52;
            font-size: 18px;
            line-height: 100%;
            font-weight: 400;
        }
    }
`

export interface AbInputQuantidadeProps {
    onChange: (contador: number) => void;
    label: string;
}

export const AbInputQuantidade = ({ onChange, label }: AbInputQuantidadeProps) => {
    const [contador, setContador] = useState(1);

    useEffect(() => {
        if (onChange) {
            onChange(Number(contador));
        }
    }, [contador]);

    return (
        <InputQuantidadeEstilizado>
            <label>{label}</label>
            <div>
                <button onClick={() => setContador(prev => prev - 1)}>-</button>
                <span>{contador > 0 && contador < 10 ? '0' : ''}{contador}</span>
                <button onClick={() => setContador(prev => prev + 1)}>+</button>
            </div>
        </InputQuantidadeEstilizado>
    );
}