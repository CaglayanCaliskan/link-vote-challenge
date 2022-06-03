import {render, screen} from '@testing-library/react';
import LinkItem from '../LinkItem';
import {MemoryRouter} from 'react-router-dom';
import {LinkProvider} from '../../context/LinkContext';

test('Should render LinkItem component', () => {
  const link = {id: 1, url: 'https://www.google.com', name: 'Google', point: 1};
  const {container} = render(
    <LinkProvider>
      <LinkItem link={link} />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );
});
test('LinkItem component children', () => {
  const link = {id: 1, url: 'https://www.google.com', name: 'Google', point: 1};
  const {container} = render(
    <LinkProvider>
      <LinkItem link={link} />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );

  const linkItem = container.querySelector('.link');
  expect(linkItem).toBeInTheDocument();
  expect(linkItem.firstChild.className).toBe('vote-box');
});
