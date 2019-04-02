import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Header from "../header";

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