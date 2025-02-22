import { render } from '@testing-library/react';
import Button from './index';

test('Render Button', () => {
  const element = render(
    <Button title="test" />
  );

  expect(element.getByText('test')).not.toBeNull();
});
