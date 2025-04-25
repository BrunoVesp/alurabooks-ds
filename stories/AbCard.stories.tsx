import React from "react";
import { AbCard } from "../src";
import { ComponentMeta } from "@storybook/react";

export default {
    title: 'Components/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

export const Card = () => {
    return (
        <AbCard>
            <h1>Olá, eu sou um card</h1>
        </AbCard>
    );
}