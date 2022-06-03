import {render, screen} from '@testing-library/react';
import LinkForm from '../LinkForm';
import {MemoryRouter} from 'react-router-dom';
import {LinkProvider} from '../../context/LinkContext';

test('Should render LinkForm component', () => {
  const {container} = render(
    <LinkProvider>
      <LinkForm />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );
  const form = container.querySelector('.card.form');
  expect(form).toBeInTheDocument();
  //form-group
  const formGroup = form.querySelector('.form-group');
  expect(formGroup).toBeInTheDocument();
  //form-group must have 2 input fields with type of text
  const inputFields = formGroup.querySelectorAll('input[type="text"]');
  expect(inputFields.length).toBe(2);
});

test('form-group must have 2 input fields with type of text', () => {
  const {container} = render(
    <LinkProvider>
      <LinkForm />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );
  const formGroup = container.querySelector('.form-group');
  expect(formGroup).toBeInTheDocument();
  const inputFields = formGroup.querySelectorAll('input[type="text"]');
  expect(inputFields.length).toBe(2);

  screen.debug();
});

test('button check: if no input, button must be a disable', () => {
  render(
    <LinkProvider>
      <LinkForm />
    </LinkProvider>,
    {wrapper: MemoryRouter}
  );
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toHaveTextContent('Add');
  expect(buttonEl).toBeDisabled();
});
