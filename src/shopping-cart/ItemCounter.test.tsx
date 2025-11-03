import { describe, it, expect } from 'vitest';
import { ItemCounter } from './ItemCounter';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ItemCounter', () => {
  it('should render with default values', () => {
    const productName = 'Nintendo';

    render(<ItemCounter productName={productName} />);

    expect(screen.getByText(productName)).toBeDefined();
  });

  it('should render with custom quantity', () => {
    const productName = 'Nintendo';
    const quantity = 10;

    render(<ItemCounter productName={productName} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  it('should increase count when increment button is clicked', () => {
    const productName = 'Nintendo';
    render(<ItemCounter productName={productName} />);

    const incrementButton = screen.getByRole('button', { name: '+1' });
    fireEvent.click(incrementButton);

    expect(screen.getByText('2')).toBeDefined();
  });

  it('should decrease count when decrement button is clicked', () => {
    const quantity = 1;
    const productName = 'Nintendo';

    render(<ItemCounter productName={productName} quantity={quantity} />);

    const decrementButton = screen.getByRole('button', { name: '-1' });
    fireEvent.click(decrementButton);

    expect(screen.getByText('0')).toBeDefined();
  });

  it('should not decrease count when it was already 0', () => {
    const productName = 'Nintendo';
    render(<ItemCounter productName={productName} />);

    const decrementButton = screen.getByRole('button', { name: '-1' });
    fireEvent.click(decrementButton);

    expect(screen.getByText('0')).toBeDefined();
  });

  it('should show red text when count is 0', () => {
    const productName = 'Nintendo';
    render(<ItemCounter productName={productName} />);

    const decrementButton = screen.getByRole('button', { name: '-1' });
    fireEvent.click(decrementButton);

    expect(screen.getByText(productName).style.color).toBe('red');
  });

  it('should show black text when count is greater than 0', () => {
    const productName = 'Nintendo';
    render(<ItemCounter productName={productName} />);

    const incrementButton = screen.getByRole('button', { name: '+1' });
    fireEvent.click(incrementButton);

    expect(screen.getByText(productName).style.color).toBe('black');
  });
});
