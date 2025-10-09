import React from 'react';
import {createComponent} from '@lit/react';
import { LitText } from './lit-text';

export const Text = createComponent({
  tagName: 'lit-text',
  elementClass: LitText,
  react: React,
});