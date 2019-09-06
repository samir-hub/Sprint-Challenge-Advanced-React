import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import App, { componentDidMount } from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test('contains nav title', () => {
  const container = render(<App />);
  container.getByText(/uswnt/i);
});

test('should have text [player name]',  async ()=>{
  const {findByText} = await render(<App />)
  findByText(/[morgan]/i)
})


test('contains second title', () => {
  // Arrange
  const container = render(<App />);
  // Act - getting the node by text
  container.getByTestId(/title/i);
  // Assertion is if ^^^ is truthy
});
