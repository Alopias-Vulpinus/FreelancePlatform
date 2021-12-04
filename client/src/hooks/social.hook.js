import { useHttp } from "./http.hook"
import {useSelector, useDispatch} from 'react-redux'
import { updateUser } from "../redux/actions"


export const useSocials = () => {
    const {request} = useHttp()
    const signInRole = useSelector(state => state.user.signInRole)
    const dispatch = useDispatch()

    const responseGoogle = async (response) => {
        console.log('Google creds: ')
        console.log(response)
        response.role = signInRole
        const user = await request(`auth/create/${signInRole}/google`, 'POST', response)
        console.log('user: ' + user)
        dispatch(updateUser(user))
      }
    
    const responseFacebook = (response) => {
        console.log('Facebook creds')
        console.log(response)
    }
    
    const responseVkontakte = async (response) => {
        console.log('VK creds')
        console.log(response)
        const body = JSON.stringify(response)
        const headers ={}
        const method = 'POST'
        headers['Content-Type'] = 'application/json'
        console.log(`sendingBody ${body}`)
        await fetch('/auth/create/vk', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(response) // body data type must match "Content-Type" header
          });
    }

    return {responseGoogle, responseFacebook, responseVkontakte}
}