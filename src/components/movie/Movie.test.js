import { shallow, mount, render } from 'enzyme'
import Movie from './Movie'
import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';

describe("<Movie /> UI Component", () => {
    it("renders default movie", () =>
        expect(
            shallow(<Movie />)
                .find('div.Movie')
                .length
        ).toBe(1)
    )
})