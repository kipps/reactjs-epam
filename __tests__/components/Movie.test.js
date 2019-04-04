import { shallow } from 'enzyme/build';
import { configure } from 'enzyme/build';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16/build';

import Movie from '../../src/components/movie/Movie';

configure({ adapter: new Adapter() });

describe("Movie", () => {
    it("renders default movie", () =>
        expect(
            shallow(<Movie />)
                .find('div.Movie')
                .length
        ).toBe(1));

    it('renders correctly', () => {
        const tree = renderer
          .create(<Movie />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});