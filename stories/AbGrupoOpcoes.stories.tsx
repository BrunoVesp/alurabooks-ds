import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src';

export default {
    title: 'Components/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Padrao = Template.bind({});

Padrao.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'E-book',
            corpo: '00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo: 'Impresso',
            corpo: '00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo: 'Impresso + E-book',
            corpo: '00,00',
            rodape: '.pdf, .epub, .mob'
        }
    ]
} as AbGrupoOpcoesProps
