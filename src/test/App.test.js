import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('Tests on <App />', () => {
    
    test('Should be correctly render ', () => {
        const wrapper = shallow(<App />)
    
        expect( wrapper ).toMatchSnapshot()
    })

})