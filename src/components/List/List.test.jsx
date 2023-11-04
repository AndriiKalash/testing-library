import { render, screen } from '@testing-library/react';
import List from './List';

const data = ['html', 'css', 'js'];

// describe the collection of some tests, (if we need to discribe only 1 test ,we can use instead : test or it)
describe('List component', () => {
  it('List render', () => {
    render(<List items={data} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/html/)).toBeInTheDocument();
  });

  it('List render without data', () => {
    render(<List />);
    // we should use query when would like to see thet elment dose not shown on page
    expect(screen.queryByRole('list')).toBeNull();
  });

  //   snapshot test compare my component wich i save here with new version after changing . If i change something , this test will show it and offer me to save new version if i need
  it('List snapshot', () => {
    const view = render(<List items={data} />);
    expect(view).toMatchSnapshot();
  });

  it('List snapshot empty', () => {
    const view = render(<List />);
    expect(view).toMatchSnapshot();
  });
});
