import React from 'react';
import { shallow } from 'enzyme'
import ImageGridItem from '../../components/ImageGridItem';

describe('Unite test to <ImageGridItem />', () => {
    
    const title = 'Gif Title'
    const url = 'https://giphy.com/gifs/rurouni-kenshin-samurai-x-eo8UrZwpvjPHi'

    let wrapper = shallow(<ImageGridItem title={ title } url= { url }/>)
    
    beforeEach( () => {
        wrapper = shallow(<ImageGridItem title={ title } url= { url } />)
    })

    test('Correctly Render', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Title props is string', () => {
        const titleText = wrapper.find('span').text().trim()

        expect( titleText ).toBe( title )
    })

    test('URL and alt exist in img element', () => {
        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( 'img' )
    })
})