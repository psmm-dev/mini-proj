# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## --------------------------------------
Developer Guide

Core React Components (with possible Lit replacements)
- LoginPage (React)
    Should stay React (it’s the page wrapper, ties things together).

- LoginForm (React)
    Should stay React (handles state, submit, navigation).

- LoginInput (Lit)
    Could be a Lit component, wrapped with @lit-labs/react.
    Reusable across React and non-React projects.

- Button (Lit)
    Good candidate for Lit (simple, reusable, often shared across apps).

- ErrorMessage (Lit or React)
    Could be Lit if you want styled, reusable alerts.
    Or React if it’s app-specific.

MainPage (React)

- Should stay React (app logic, routing).


<!-- import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }) => {
    const res = await fetch('/users.json')
    const users = await res.json()
    const match = users.find(u => u.username === username && u.password === password)
    if (!match) throw new Error('Invalid credentials')
    return { username: match.username }
  }
) -->

--- setup RTK
create src/store.js
create src/features/authSlice.js
    const initialState = {
        isAuthenticated: false,
        user: null,
        error: null,
    }
wrap app with provider
