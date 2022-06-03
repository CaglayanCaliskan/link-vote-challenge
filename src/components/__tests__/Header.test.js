import {render, screen} from '@testing-library/react';
import Header from '../Header';
import {MemoryRouter} from 'react-router-dom';

test('Should render Header component', () => {
  const {container} = render(<Header />, {wrapper: MemoryRouter});
  expect(container).toBeInTheDocument();
  expect(container.querySelectorAll('a').length).toBe(2);
  expect(container.querySelectorAll('a')[0].textContent).toBe(
    'Digitastic.Plus'
  );
  expect(container.querySelectorAll('a')[1].textContent).toBe(
    'Link Vote Challenge'
  );
});
