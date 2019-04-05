import { shallow } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';
import Footer from "../../src/components/layout/footer";

configure({ adapter: new Adapter() });


describe("Footer ", () => {
  it("renders default footer", () =>
    expect(
      shallow(<Footer />)
        .find('footer.Footer')
        .length
    ).toBe(1));

  it('renders footer correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});