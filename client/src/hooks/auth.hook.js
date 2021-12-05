import {useDispatch, useSelector} from "react-redux";
import {updateAuth, updateUser} from "../redux/actions";
import {useHttp} from "./http.hook";
import {mapResponseToUser} from "../api/mapper";

export const useAuth = async () => {
    const {request} = useHttp()
    let user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

    if(!user.id){
        const user_id = localStorage.getItem('user_id')
        if(user_id) {
            //const userResponse = await request('profile/', 'GET', {id: user_id})
            user = mapResponseToUser({});
            dispatch(updateUser(user))
            dispatch(updateAuth(true))
        }
    }
    return user
}