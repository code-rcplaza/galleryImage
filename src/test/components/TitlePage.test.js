import { shallow } from 'enzyme';
import React from 'react';
import { TitlePage } from '../../components/TitlePage';

describe('Tests on <TitlePage />', () => {
    test('Should be correctly render ', () => {
        const wrapper = shallow(<TitlePage />)
        
        expect( wrapper ).toMatchSnapshot()
    });
});