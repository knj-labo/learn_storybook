import React from 'react';
// import { css } from '@emotion/react';
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="bill"
          {...register('name')}
          data-testid="name"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="luo"
          {...register('email')}
          data-testid="email"
        />
      </div>

      <div>
        <label htmlFor="email">Password</label>
        <input
          placeholder="bluebill1049@hotmail.com"
          type="password"
          {...register('password')}
          data-testid="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
