import { describe, it, expect } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
  it('should render first and last name correctly with container', () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector('h1');
    expect(h1?.textContent).toContain('Bryan');
  });

  it('should render first and last name correctly with screen', () => {
    render(<MyAwesomeApp />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.innerHTML).toContain('Bryan');
  });
});
