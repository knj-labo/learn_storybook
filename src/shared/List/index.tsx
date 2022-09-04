import React from 'react';
import { css } from '@emotion/react';

const list = css`
  list-style: none;
  padding: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: #222222;

  > * + * {
    margin-top: 8px;
  }
`;

const item = css`
  padding: 8px;
`;

const link = css`
  text-decoration: none;
  color: #222222;

  :hover {
    border-bottom: solid 2px #222;
  }
`;

export const List = () => (
    <ul css={list}>
      <li css={item}>
        <a css={link} href="#">
          Twitter
        </a>
      </li>
      <li css={item}>
        <a css={link} href="#">
          Github
        </a>
      </li>
      <li css={item}>
        <a css={link} href="#">
          Zenn
        </a>
      </li>
      <li css={item}>
        <a css={link} href="#">
          Note
        </a>
      </li>
    </ul>
  );
