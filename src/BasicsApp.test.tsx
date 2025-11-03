import { render } from '@testing-library/react';
import { BasicsApp } from './BasicsApp';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';

// mock the ItemCounter component so that it doesn't render the actual component
// we do this because we want to test the BasicsApp component itself, not the ItemCounter component
// and in the future, child components might have more complex behavior that we don't want to test here.
const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="item-counter" />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('BasicsApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const { container } = render(<BasicsApp />);

    expect(container).toMatchSnapshot();
  });

  it('should render the correct number of items', () => {
    render(<BasicsApp />);

    expect(screen.getAllByTestId('item-counter')).toHaveLength(3);
  });

  it('should render item counter with correct props', () => {
    render(<BasicsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: 'Nintendo Switch',
      quantity: 0,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: 'Playstation 5',
      quantity: 0,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: 'Xbox Series X',
      quantity: 0,
    });
  });
});
