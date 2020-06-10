import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import App from '../src/app';

describe('app module', () => {
  afterEach(cleanup);
  test('it exists', () => {
    expect(App).toBeDefined();
  });

  test.skip('it should render App component', () => {
    const { getByText } = render(<App />);
    const element = getByText(/HOME PAGE/);
    expect(element).toBeInTheDocument();
  });
});
