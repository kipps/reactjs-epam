import { shallow } from 'enzyme/build';
import { configure, mount } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';
import MoviesList from "../../src/components/movies-list/MoviesList";

configure({ adapter: new Adapter() });

describe("Radio", () => {
  let movies = {
      title: 'Begin from start',
      genre: 'Драма, Комедия',
      date: '2018',
      img: 'medium',
      key: '3432424'
    };
  let list,
      component = mount(<MoviesList movies={movies} />),
      textH1 = "No films found";


  beforeEach(() => {
    list = shallow(<MoviesList movies={movies}/>);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<MoviesList movies={movies} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render correct text", () => {
    expect(
      shallow(<MoviesList movies={movies} />).find("h1")
        .first()
        .text()
    ).toEqual(textH1);
  });

});
