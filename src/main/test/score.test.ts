import { scores } from '../score';

describe('score', () => {
  it('should be 100 points in total', () => {
    const total = Object.keys(scores).reduce(
      (sum, next) => sum + scores[next],
      0
    );

    expect(total).toEqual(100);
  });
});
