import React from 'react';
import { shallow, render } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';

import User from '../../src/components/user/User';


configure({ adapter: new Adapter() });

describe("User ", () => {
  it("renders default user", () =>
    expect(
      shallow(<User />)
        .find('div.User')
        .length
    ).toBe(1));

  it('user snapshot', () => {
    const tree = renderer
      .create(<User />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});