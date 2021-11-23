import React from "react"
import { Rating as ReactRating } from 'react-simple-star-rating'

export const Rating = (props) => {
    const rating = props.rating || 5
    return (
        <>
           <ReactRating ratingValue={rating} />
        </>
    )
}