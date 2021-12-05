import { useHttp } from "./http.hook"
import {useSelector, useDispatch} from 'react-redux'
import {updateAuth, updateUser} from "../redux/actions"
import {useHistory} from "react-router-dom";
import {mapResponseToUser} from "../api/mapper";

export const useSocials = () => {
    const {request} = useHttp()
    const signInRole = useSelector(state => state.user.signInRole)
    const dispatch = useDispatch()
    const history = useHistory()

    const responseGoogle = async (response) => {
        const userResponse = await request(`auth/login/${signInRole}/google`, 'POST', response)
        console.log('userResponse', userResponse)
        const user = mapResponseToUser(userResponse)
        console.log('user', user)
        localStorage.setItem('user_id', user.id)
        dispatch(updateUser(user))
        dispatch(updateAuth(true))
        history.push("/")
      }
    
    const responseFacebook = (response) => {
        console.log('Facebook creds')
        console.log(response)
    }
    
    const responseVkontakte = async (response) => {
        console.log('VK creds')
        console.log(response)
    }

    return {responseGoogle, responseFacebook, responseVkontakte}
}