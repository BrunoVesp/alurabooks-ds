import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto, AbCampTextoProps } from '../src'

export default {
    title: 'Components/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const AbCampoTextoComponent = Template.bind({});

AbCampoTextoComponent.args = {
    id: "email",
    label: "E-mail",
    placeholder: "seuemail@maneiro.com.br",
} as AbCampTextoProps;