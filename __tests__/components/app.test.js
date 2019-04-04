import React from 'react';
import { shallow } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';

import App from "../../src/container/app";

configure({ adapter: new Adapter() });

describe("Search Result ", () => {
  it("renders default App", () =>
    expect(
      shallow(<App />)
        .find('div.App')
        .length
    ).toBe(1));

  it('renders App correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});