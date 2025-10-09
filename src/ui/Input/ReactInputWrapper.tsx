import React from 'react';
import {createComponent} from '@lit/react';
import { LitInput } from './lit-input';

export const Input = createComponent({
  tagName: 'lit-input',
  elementClass: LitInput,
  react: React,
  events:{
    onChange: 'change',
  }
});