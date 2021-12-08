import React, {useEffect} from 'react'

import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../ProfileListWithPagination'
import {useDispatch, useSelector} from 'react-redux'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectCustomers} from "../../redux/reducers/userReducer";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToUserList} from "../../api/mapper";
import {updateCustomers} from "../../redux/actions";
import {CUSTOMER_ALL} from "../../api/endpoints";


const CustomersPage = (props) => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const customers = useSelector(selectCustomers())

    useEffect(() => {
        getCustomersFromServer()
    }, [])

    const getCustomersFromServer = async() => {
        try{
            const customersResponse = await request(CUSTOMER_ALL, 'GET')
            let customersResult = mapResponseToUserList(customersResponse)
            dispatch(updateCustomers(customersResult))
        }
        catch(e){
            console.log('server error occurred: ', e)
        }
    }

    return (
        <>
            <Container className='text-light'>
                {/*<ProfileSearch/>*/}
                <ProfileListWithPagination profiles={customers}/>
            </Container>
        </>
    )
}
export const CustomersPageWithAuthRedirect = WithAuthRedirect(CustomersPage)
