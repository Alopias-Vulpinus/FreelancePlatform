import { useHttp } from "./http.hook"
import {useSelector, useDispatch} from 'react-redux'
import {updateAuth, updateUser} from "../redux/actions"
import {useHistory} from "react-router-dom";

const user_example = {
    id: '1',
        username: 'dimasiandro@yandex.by',
        role: 'CUSTOMER',
        firstName : 'Dmitriy',
        lastName: 'Belotskiy',
        status: 'I love code',
        contactMe: 'https://vk.com/dimasiandro',
        rating : 5,
        skills : ['Python', 'Java' ]
}

export const useSocials = () => {
    const {request} = useHttp()
    const signInRole = useSelector(state => state.user.signInRole)
    const dispatch = useDispatch()
    const history = useHistory()
    const responseGoogle = async (response) => {
        console.log(response)
        const user = await request(`auth/login/${signInRole}/google`, 'POST', response)
        console.log(user)
        localStorage.setItem('user_id', user.social_id)
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