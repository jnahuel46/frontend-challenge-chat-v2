import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('2 + 2 equals 4', () => {
  expect(2 + 2).toBe(4);
});

test('string contains text', () => {
  expect('hello world').toContain('world');
});