import React from 'react';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data: unknown) => console.log(data);

  const handleError = (errors: unknown) => {};

  const registerOptions = {
    name: { required: 'Name is required' },
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };

  const textInputOfName = register('name', registerOptions.name);
  const textInputOfEmail = register('name', registerOptions.email);
  const textInputOfPassword = register('name', registerOptions.password);

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label htmlFor="name">
          Name
          <input id="name" type="text" {...textInputOfName} />
        </label>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input id="email" type="email" {...textInputOfEmail} />
        </label>
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input id="password" type="password" {...textInputOfPassword} />
        </label>
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
