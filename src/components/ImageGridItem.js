import React from 'react'
import PropTypes from 'prop-types'
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter'

const ImageGridItem = ({ title, url }) => {
    
    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            <div className="img-container animate__animated animate__fadeIn animate__delay-0.5s">
                <img className="img-item" src={url} alt="img" />
                <div className="line-container">
                    <span className="single-line">{capitalizeFirstLetter(title)}</span>
                </div>
            </div>
        </a>
    )
}


ImageGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default ImageGridItem

