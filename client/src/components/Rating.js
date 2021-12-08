import React, {useState} from "react"
import { Rating as ReactRating } from 'react-simple-star-rating'
import {useHttp} from "../hooks/http.hook";
import {CHANGE_CUSTOMER_RATING, CHANGE_PERFORMER_RATING, CHANGE_RATING} from "../api/endpoints";
import {useDispatch, useSelector} from "react-redux";
import {selectTask} from "../redux/reducers/taskReducer";
import {selectUser} from "../redux/reducers/userReducer";

export const Rating = (props) => {
    const {request} = useHttp()
    const [rating, setRating] = useState(props.rating || 0)
    const user = useSelector(selectUser())
    const task = useSelector(selectTask())

    const handleRating = async (rate) => {
        if(user.role === 'customer'){
            const ratingResponse = await request(CHANGE_PERFORMER_RATING, 'POST',
                {userFrom: user.id, userTo: task.performer.id, rate})
            const rating = ratingResponse.result
            console.log('rating', rating)
            setRating(rating)
            alert('rating set : ' + rating)
        }else if (user.role === 'performer'){
            const ratingResponse = await request(CHANGE_CUSTOMER_RATING, 'POST',
                {userFrom: user.id, userTo: task.customer.id, rate})
            const rating = ratingResponse.result
            setRating(rating)
            console.log('rating', rating)
        }
    }

    return (
        <>
           <ReactRating
               onClick={handleRating}
               ratingValue={rating} />
        </>
    )
}