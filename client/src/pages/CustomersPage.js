import React from 'react'
import { ProfileSearch } from '../components/ProfileSearch'

import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../components/ProfileListWithPagination'
import { useSelector } from 'react-redux'


export const CustomersPage = (props) => {

    const customers = useSelector(state => state.user.customers)
    return (
        <>
            <Container className='text-light'>
                <ProfileSearch/>
                <ProfileListWithPagination profiles={customers}/>
            </Container>
        </>
    )
}