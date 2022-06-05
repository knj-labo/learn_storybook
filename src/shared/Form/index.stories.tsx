import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within, screen, userEvent } from '@storybook/testing-library';
import { Form } from '../Form';

export default {
  title: 'Shared/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;

export const 全項目適切に入力された場合 = Template.bind({});
全項目適切に入力された場合.play = async ({ canvasElement }) => {
  {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('name'), 'サンプル太郎', {
      delay: 100, // 文字が入力される間隔の指定
    });
    await userEvent.type(canvas.getByTestId('email'), 'sample@email.com', {
      delay: 100,
    });
    await userEvent.type(canvas.getByTestId('password'), 'samplepassword', {
        delay: 100,
    });
    await userEvent.click(canvas.getByRole('button'));
  }
};
