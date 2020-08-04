import React from 'react';
import { shallow } from 'enzyme'
import ImagesGrid from '../../components/ImageGrid'
import { useFetchImgs } from '../../hooks/useFetchImgs';

jest.mock('../../hooks/useFetchImgs')

describe('Tests on <ImagesGrid />', () => {
    const category = 'photos'

    test('Should be correctly render ', () => {
        
        useFetchImgs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<ImagesGrid category={ category } />)

        expect( wrapper ).toMatchSnapshot()
    });

    test('Should show items when gifs are loaded with useFecthGif', () => {
        const imgs = [{
            albumId: 1,
            id: 1,
            title: "ASDF",
            url: "https://localhost/assets/image.jpg",
            thumbnailUrl: "https://localhost/assets/image.jpg",
        }]

        useFetchImgs.mockReturnValue({
            data: imgs,
            loading: false
        })

        const wrapper = shallow(<ImagesGrid category={ category } />)

        expect( wrapper.find('p').exists()).toBe(false)
        expect( wrapper.find('ImageGridItem').length).toBe(imgs.length)
    });
})