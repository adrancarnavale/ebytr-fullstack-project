import { renderWithRouterAndRedux } from '@test';
import { AppRoutes } from '@components';
import { screen } from '@testing-library/react';
import 'jest-extended';
import '@testing-library/jest-dom/extend-expect';

describe('Tests the CreateTask page', () => {
  describe('It', () => {
    it('Has the correct header', async () => {
      renderWithRouterAndRedux(<AppRoutes />, { route: '/create' });
      expect(await screen.findByText('Create Task')).toBeInTheDocument();
    });
  });
});
