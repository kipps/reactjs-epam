import {mount, shallow} from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';
import Header from "../../src/components/layout/header";
import MoviesList from "../../src/components/movies-list/MoviesList";

configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe("Header ", () => {
  let component = mount(<Header />);

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