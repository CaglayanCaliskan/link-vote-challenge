import {render, screen} from '@testing-library/react';
import LinkList from '../LinkList';
import {MemoryRouter} from 'react-router-dom';
import {LinkProvider} from '../../context/LinkContext';

test('Should render LinkList component', () => {
  const {container} = render(
    <LinkProvider>
      <LinkList />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );
  screen.debug();
});
