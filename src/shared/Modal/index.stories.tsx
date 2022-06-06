import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../Modal';

export default {
    title: 'Shared/Model',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => <Modal />;

export const Demo = Template.bind({});
Demo.args = {}