import { useEffect, useState } from "react"
import { getImgs } from '../helpers/getImgs'

export const useFetchImgs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        setTimeout(() => {
            getImgs(category)
                .then(gifs => {
                    setstate({
                        data: gifs,
                        loading: false
                    })
                })

        }, 1000);

    }, [category])

    return state
}
