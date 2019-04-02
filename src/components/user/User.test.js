import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import User from './User';


configure({ adapter: new Adapter() });

describe("User ", () => {
  it("renders default user", () =>
    expect(
      shallow(<User />)
        .find('div.User')
        .length
    ).toBe(1));

  it('renders header correctly', () => {
    const tree = renderer
      .create(<User />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});