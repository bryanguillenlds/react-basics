import { add, divide, multiply, subtract } from './math.helper';
import { describe, it, expect } from 'vitest';

describe('math helper', () => {
  it('should return the sum of two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('should return the difference of two numbers', () => {
    const result = subtract(1, 2);
    expect(result).toBe(-1);
  });

  it('should return the product of two numbers', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  it('should return the quotient of two numbers', () => {
    const result = divide(1, 2);
    expect(result).toBe(0.5);
  });
});
