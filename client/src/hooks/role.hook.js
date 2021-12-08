import {useSelector} from "react-redux";
import {selectUser} from "../redux/reducers/userReducer";

export const useRole = () => {
    const user = useSelector(selectUser())
    let isCustomer = false, isPerformer = false
    if(user.role === 'customer'){
        isCustomer = true
    }else if(user.role === 'performer'){
        isPerformer = true
    }

    return {isCustomer, isPerformer}
}