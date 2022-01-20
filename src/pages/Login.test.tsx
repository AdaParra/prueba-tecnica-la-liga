import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Login from './Login';

describe('Login.tsx', () => {
  test('shows the login page correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>,
    );

    const loginTitle = getByText(/Proyecto LaLiga/);

    expect(loginTitle).toBeInTheDocument();
  });
});
