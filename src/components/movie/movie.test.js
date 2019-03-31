import { shallow } from 'enzyme'
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Movie from './Movie'

configure({ adapter: new Adapter() });

describe("Movie", () => {
    it("renders default star", () =>
        expect(
            shallow(<Movie />)
                .find('div.Movie')
                .length
        ).toBe(1))
})