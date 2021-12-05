import React from 'react'
import { ProfileSearch } from '../ProfileSearch'
import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../ProfileListWithPagination'

import { useSelector } from 'react-redux'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectPerformers} from "../../redux/reducers/userReducer";



const PerformersPage = () => {

    const performers = useSelector(selectPerformers())
    
    return (
        <>
            <Container className='text-light'>
                <ProfileSearch/>
                <ProfileListWithPagination profiles={performers}/>
            </Container>
        </>
    )
}

export const PerformersPageWithAuthRedirect = WithAuthRedirect(PerformersPage)