import React from 'react';
import {createComponent} from '@lit/react';
import { LitLogo } from './lit-logo';

export const Logo = createComponent({
  tagName: 'lit-logo',
  elementClass: LitLogo,
  react: React,
});