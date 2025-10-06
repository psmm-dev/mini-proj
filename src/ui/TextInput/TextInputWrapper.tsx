import React from 'react';
import {createComponent} from '@lit/react';
import { TextInput } from './text-input';

export const TextInputWrapper = createComponent({
  tagName: 'text-input',
  elementClass: TextInput,
  react: React,
  events:{
    onChange: 'change',
  }
});