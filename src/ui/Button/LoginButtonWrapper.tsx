import React from 'react';
import {createComponent} from '@lit/react';
import { LoginButton } from './login-button';

export const LoginButtonWrapper = createComponent({
  tagName: 'login-button',
  elementClass: LoginButton,
  react: React,
  events: {
    onLogin: 'login',
  }
});