import { shallow } from 'enzyme';
import React from 'react';
import { Loading } from '../../components/Loading';

describe('Tests on <Loading />', () => {
    
    test('Should be correctly render', () => {
        const wrapper = shallow(<Loading />)

        expect( wrapper ).toMatchSnapshot()
    });
    
});