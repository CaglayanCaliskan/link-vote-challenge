import {render, screen} from '@testing-library/react';
import Pagination from '../Pagination';
import {MemoryRouter} from 'react-router-dom';
import {LinkProvider} from '../../context/LinkContext';

test('Should render Pagination component', () => {
  const {container} = render(
    <LinkProvider>
      <Pagination />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );
});
