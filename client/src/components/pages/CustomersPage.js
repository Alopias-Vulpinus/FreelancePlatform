import React, {useEffect} from 'react'
import { ProfileSearch } from '../ProfileSearch'

import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../ProfileListWithPagination'
import {useDispatch, useSelector} from 'react-redux'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectCustomers, selectPerformers} from "../../redux/reducers/userReducer";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToUserList} from "../../api/mapper";
import {updateCustomers, updatePerformers} from "../../redux/actions";


const CustomersPage = (props) => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const customers = useSelector(selectCustomers())

    useEffect(() => {
        getCustomersFromServer()
    }, [])

    const getCustomersFromServer = async() => {
        try{
            //const performersResponse = await request(GET_PERFORMERS_ENDPOINT, 'GET')
            const customersResponse = {}
            let customersResult =  await mapResponseToUserList(customersResponse)
            dispatch(updateCustomers(await customersResult))
        }
        catch(e){
            console.log('server error occurred: ', e)
        }
    }

    return (
        <>
            <Container className='text-light'>
                <ProfileSearch/>
                <ProfileListWithPagination profiles={customers}/>
            </Container>
        </>
    )
}
export const CustomersPageWithAuthRedirect = WithAuthRedirect(CustomersPage)
