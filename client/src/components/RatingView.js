import React from "react"
import { RatingView as ReactRatingView } from 'react-simple-star-rating'

export const RatingView = (props) => {
    const rating = props.rating || 5
    return (
        <>
           <ReactRatingView ratingValue={rating} />
        </>
    )
}