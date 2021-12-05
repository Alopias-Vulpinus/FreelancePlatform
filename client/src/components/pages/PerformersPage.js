import React from 'react'
import { ProfileSearch } from '../ProfileSearch'
import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../ProfileListWithPagination'

import {useDispatch, useSelector} from 'react-redux'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectPerformers} from "../../redux/reducers/userReducer";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToUserList} from "../../api/mapper";
import {updatePerformers} from "../../redux/actions";



const PerformersPage = async () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const performers = useSelector(selectPerformers())
    const performersResponse = {}//await request('', 'GET')
    let performersResult = mapResponseToUserList(performersResponse)
    dispatch(updatePerformers(performersResult))
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