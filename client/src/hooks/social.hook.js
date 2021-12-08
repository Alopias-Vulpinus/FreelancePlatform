import { useHttp } from "./http.hook"
import {useSelector, useDispatch} from 'react-redux'
import {updateAuth, updateUser} from "../redux/actions"
import {useHistory} from "react-router-dom";
import {mapResponseToUser} from "../api/mapper";
import {CUSTOMER_LOGIN_GOOGLE, PERFORMER_LOGIN_GOOGLE} from "../api/endpoints";

export const useSocials = () => {
    const {request} = useHttp()
    const signInRole = useSelector(state => state.user.signInRole)
    const dispatch = useDispatch()
    const history = useHistory()

    const responseGoogle = async (response) => {
        let user = {}
        let userRealResponse = {}
        console.log('signInRole : ', signInRole)
        console.log(signInRole === 'customer')
         try{
             if(signInRole === 'customer'){
                 userRealResponse = await request(CUSTOMER_LOGIN_GOOGLE, 'POST', response)
             } else if (signInRole === 'performer'){
                  userRealResponse = await request(PERFORMER_LOGIN_GOOGLE, 'POST', response)
             }
             console.log('userRealResponse : ', userRealResponse)
             //const userResponse = {}
             //console.log('userResponse', userResponse)
             user = mapResponseToUser(userRealResponse)
             console.log('user', user)
             localStorage.setItem('user_id', user.id)
         }
         catch (e) {
             console.log('catching exception ' , e)
             user = mapResponseToUser({})
             console.log('user', user)
             localStorage.setItem('user_id', user.id)
         }
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