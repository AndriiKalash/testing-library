import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';

// global obj jest which give me some function for check if function in component is work correct:
const onChange = jest.fn();

describe('Search component', () => {
  it('render Search component', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    // excluding capital letters: /find/i
    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });
  it('render without children', () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
  it('render without placeholder', () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
  it('custom placeholder work correctly', () => {
    render(
      <Search value="" onChange={onChange} placeholder="custom placeholder" />
    );
    expect(
      screen.getByPlaceholderText(/custom placeholder/i)
    ).toBeInTheDocument();
  });
  //checking when user input some text , function onChange should work correctly:
  it('onChange works', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );
    // imitation like user typing and function calling after every inputing simboll
    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('dinamic style works', () => {
    render(<Search value="abc" onChange={onChange} />);
    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText(/search/i)).toHaveClass('label');
  });

  it('search snapshot', () => {
    const view = render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );
    expect(view).toMatchSnapshot();
  });
});
