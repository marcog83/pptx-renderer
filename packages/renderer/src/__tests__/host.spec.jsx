import { renderer } from '../host';

describe('host', () => {
  it('should be true', () => {
    expect(renderer).toEqual(expect.any(Object));
  });
});
