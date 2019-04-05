import { shallow } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';

import Radio from '../../src/components/elements/Radio';

configure({ adapter: new Adapter() });

describe("Radio", () => {
  let searchBy = ['Genre', 'Title'];
  let radioList;

  beforeEach(() => {
    radioList = shallow(<Radio label={searchBy} />);
  });

  it('renders 2 articles', () => {
    expect(radioList.find('div.Radio').length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Radio label={searchBy} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
