import { shallow } from 'enzyme'
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Star from './Star'

configure({ adapter: new Adapter() });

describe("<Star /> UI Component", () => {
    it("renders default star", () =>
        expect(
            shallow(<Star />)
                .find('div.star')
                .length
        ).toBe(1))
    it("renders selected stars", () =>
        expect(
            shallow(<Star selected={true} />)
                .find('div.selected.star')
                .length
        ).toBe(1))
})