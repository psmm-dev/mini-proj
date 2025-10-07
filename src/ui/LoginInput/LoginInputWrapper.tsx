import React from 'react';
import {createComponent} from '@lit/react';
import { LoginInput } from './login-input';

export const LoginInputWrapper = createComponent({
  tagName: 'login-input',
  elementClass: LoginInput,
  react: React,
  events:{
    onChange: 'change',
  }
});