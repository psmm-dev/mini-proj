import React from 'react';
import {createComponent} from '@lit/react';
import { LitButton } from './lit-button';

export const Button = createComponent({
  tagName: 'lit-button',
  elementClass: LitButton,
  react: React,
  events: {
    onClick: 'click',
  }
});