import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/Find course:/)).toBeInTheDocument();
  });
});
