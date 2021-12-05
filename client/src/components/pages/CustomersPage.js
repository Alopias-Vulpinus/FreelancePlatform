import React from 'react'
import { ProfileSearch } from '../ProfileSearch'

import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../ProfileListWithPagination'
import { useSelector } from 'react-redux'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectCustomers} from "../../redux/reducers/userReducer";


const CustomersPage = (props) => {

    const customers = useSelector(selectCustomers())
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
