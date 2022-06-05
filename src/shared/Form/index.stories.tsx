import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from '../Form';

export default {
  title: 'Shared/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;
export const Primary = Template.bind({});
