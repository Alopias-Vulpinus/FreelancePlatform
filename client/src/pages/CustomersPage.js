import React from 'react'
import { ProfileSearch } from '../components/ProfileSearch'

import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../components/ProfileListWithPagination'


export const CustomersPage = (props) => {
    const profiles = [{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    },{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    },{
        firstName: 'Дмитрий',
        lastName: 'Белоцкий'
    }, {
        firstName: 'Кирилл',
        lastName: 'Акулич'
    }, {
        firstName: 'Юлька',
        lastName: 'Китикет'
    }]

    return (
        <>
            <Container className='text-light'>
                <ProfileSearch/>
                <ProfileListWithPagination profiles={profiles}/>
            </Container>
        </>
    )
}