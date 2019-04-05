import React from 'react';
import { shallow } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';

import SearchResult from "../../src/components/search-result/SearchResult";

configure({ adapter: new Adapter() });

describe("Search Result ", () => {
  it("renders default SearchResult", () =>
    expect(
      shallow(<SearchResult />)
        .find('span.red')
        .length
    ).toBe(1));

  it('renders SearchResult correctly', () => {
    const tree = renderer
      .create(<SearchResult />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});