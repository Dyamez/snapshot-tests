import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import GitHubCard from './GitHubCard';

test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
})