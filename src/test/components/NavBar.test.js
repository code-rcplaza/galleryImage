import React from 'react';
import { shallow } from "enzyme";
import { NavBar } from "../../components/NavBar";

describe('Test on <NavBar />', () => {

    test('Should be correctly render', () => {
        const wrapper = shallow(<NavBar /> )

        expect( wrapper ).toMatchSnapshot()
    });
});