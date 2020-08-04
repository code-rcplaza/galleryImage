import { renderHook } from '@testing-library/react-hooks'
import { useFetchImgs } from '../../hooks/useFetchImgs'

describe('Tets in hook useFetchImgs', () => {
    
    test('Should be return initial state', async() => {

        const { result, waitForNextUpdate  } = renderHook(() => useFetchImgs('photos'))
        const { data, loading } = result.current

        await waitForNextUpdate()

        expect( data ).toEqual([])
        expect( loading ).toBe(true)
    })

    test('Should return imgs array and set loading in false', async() => {
        const { result, waitForNextUpdate  } = renderHook( () => useFetchImgs( 'photos' ) )
        
        await waitForNextUpdate()
        const { data, loading } = result.current

        expect( data.length ).toBe( 12 )
        expect( loading ).toBe(false)
    })
})