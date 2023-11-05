import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/Find course:/)).toBeInTheDocument();
  });
  it('typing in searchBox work', () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/react/)).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'react');
    expect(screen.getByDisplayValue(/react/)).toBeInTheDocument();
  });
  it('filter search is working', () => {
    render(<App />);
    //before user typing : (rendering all list strings)
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    //after user input "js":
    userEvent.type(screen.getByRole('textbox'), 'javascript');
    //Type Script will not appear:
    expect(screen.queryByText(/Type Script/)).toBeNull();
    //but js will appear:
    expect(screen.getByText(/javascript/i)).toBeInTheDocument();
  });
});
