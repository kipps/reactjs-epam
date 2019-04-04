import { shallow } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';
import Header from "../../src/components/layout/header";

configure({ adapter: new Adapter() });


describe("Header ", () => {
  it("renders default header", () =>
    expect(
      shallow(<Header />)
        .find('header.Header')
        .length
    ).toBe(1));

  it('renders header correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});