import {useDispatch, useSelector} from "react-redux";
import {updateAuth, updateUser} from "../redux/actions";
import {useCallback} from "react";

const user_result =  {
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

export const useAuth = () => {
    let user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

    const getUser = useCallback((userId) => {
        return user_result
    }, [])

    if(!user.id){
        const user_id = localStorage.getItem('user_id')
        if(user_id) {
            user = getUser(user_id)
            dispatch(updateUser(user))
            dispatch(updateAuth(true))
        }
    }
    return user
}