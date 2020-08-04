// import React, { useEffect, useState } from 'react'
import React from 'react';
import PropTypes from 'prop-types'
import { useFetchImgs } from '../hooks/useFetchImgs';
import ImageGridItem from './ImageGridItem'
import { Loading } from './Loading';

const ImageGrid = ({ category }) => {

    const { data: imgs, loading } = useFetchImgs(category);

    return (
        <>
            {loading ? <Loading /> :

                <div className="container">
                    {
                        imgs.map(({ id, title, url }) => (
                            <ImageGridItem key={id} url={url} title={title} />)
                        )
                    }
                </div>
            }
        </>
    )
}

ImageGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default ImageGrid


