import {useDispatch, useSelector} from "react-redux";
import {getUserFromServerAction, updateAuth, updateUser} from "../redux/actions";
import {useHttp} from "./http.hook";
import {mapResponseToUser} from "../api/mapper";
import {useEffect} from "react";
import {GET_PROFILE} from "../api/endpoints";

export const useAuth = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    let user = useSelector(state => state.user.currentUser)

    const call = async () => {
        if(!user.id){
            const user_id = localStorage.getItem('user_id')
            if(user_id) {
                const userResponse = await request(GET_PROFILE + `/${user_id}`, 'GET')
                user = mapResponseToUser(userResponse);
                dispatch(updateUser(user))
                dispatch(updateAuth(true))
            }
        }
    }
    useEffect( () => {
        call()
    }, [])

    return user
}