import React from "react";
import { AbInputQuantidade, AbInputQuantidadeProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Components/AbInputQuantidade',
    component: AbInputQuantidade,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantidade>

const Template : ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args}/>

export const Contador = Template.bind({});
Contador.args = {
    label: 'Quantidade'
} as AbInputQuantidadeProps;