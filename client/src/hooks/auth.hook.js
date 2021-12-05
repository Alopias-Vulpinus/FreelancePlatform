import {useDispatch, useSelector} from "react-redux";
import {getUserFromServerAction, updateAuth, updateUser} from "../redux/actions";
import {useHttp} from "./http.hook";
import {mapResponseToUser} from "../api/mapper";

export const useAuth = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    let user = useSelector(state => state.user.currentUser)

    console.log('useAuth')
    if(!user.id){
        const user_id = localStorage.getItem('user_id')
        if(user_id) {
            //const userResponse = await request('profile/', 'GET', {id: user_id})
            // console.log('useAuth userResponse',userResponse)
            user = mapResponseToUser({});
            console.log('user', user)
            dispatch(updateUser(user))
            dispatch(updateAuth(true))
            // dispatch(getUserFromServerAction(request, user_id))
        }
    }
    return user
}