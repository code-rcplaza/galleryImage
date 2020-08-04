import React from 'react'
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter'

export const Loading = () => {

    return (
        <div className="loading">
            <div className="loader-container">
                <div className="single6"></div>
            </div>
            
            <div className="line-container">
                <span className="single-line">{capitalizeFirstLetter('Loading')}</span>
            </div>
        </div>
    )
}
