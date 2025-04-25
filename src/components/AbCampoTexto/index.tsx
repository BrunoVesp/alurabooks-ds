import React from "react";
import styled from "styled-components";

const AbCampoTextoEstilizado = styled.fieldset`
    width: 509px;
    height: 72px;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: Arial, Helvetica, sans-serif;

    label {
        color: #002F52;
        font-weight: 700;
        font-size: 16px;
        padding-left: 24px;
    }

    input {
        border: 1px solid #002F52;
        border-radius: 24px;
        padding: 10px 24px;
        color: #002F52;
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }
    }
`

export interface AbCampTextoProps {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void;
}

export const AbCampoTexto = ({ id, label, type = 'text', placeholder, value, onChange }: AbCampTextoProps) => {
    return (
        <AbCampoTextoEstilizado>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        </AbCampoTextoEstilizado>
    );
}