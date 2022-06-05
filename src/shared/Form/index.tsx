import React from 'react';
import { css } from '@emotion/react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
  name: string;
  email: string;
  password: string;
};

export const Form = () => {
  const { register, handleSubmit } = useForm<Props>();
  const onSubmit = (data: unknown): void => {
    alert(JSON.stringify(data));
  };

  return (
    <form css={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label css={label} htmlFor="name">
          名前
        </label>
        <input
          css={input}
          type="text"
          placeholder="bill"
          {...register('name')}
          data-testid="name"
        />
      </div>

      <div>
        <label css={label} htmlFor="email">
          メールアドレス
        </label>
        <input
          css={input}
          type="email"
          placeholder="luo"
          {...register('email')}
          data-testid="email"
        />
      </div>

      <div>
        <label css={label} htmlFor="email">
          パスワード
        </label>
        <input
          css={input}
          placeholder="bluebill1049@hotmail.com"
          type="password"
          {...register('password')}
          data-testid="password"
        />
      </div>
      <div css={buttonBox}>
        <button css={button} type="submit">
          登録
        </button>
      </div>
    </form>
  );
};
const form = css`
  max-width: 500px;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
    border-color: #222222;

  > div + div {
    margin-top: 16px;
  }
`;

const input = css`
  width: calc(100% - 20px);
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 0.875rem;
  font-weight: 300;
  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
  color: #222222;
  font-weight: 300;

  &:focus {
    border-color: #0045e4;
  }
  &:focus-visible {
    outline: 1px solid #0045e4;
  }
`;

const label = css`
  color: #0045e4;
  font-weight: bold;
`;

const buttonBox = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 320px;
`;
const button = css`
  background-color: #0045e4;
  border-radius: 24px;
  color: white;
  height: 44px;
  padding-left: 30px;
  padding-right: 30px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  font-weight: 700;
  width: 100%;
  border: none;

  &:hover {
    border-color: #0045e4;
    border-style: solid;
    border-width: 2px;
    background-color: white;
    color: #0045e4;
  }
`;
