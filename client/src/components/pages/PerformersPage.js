import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { ProfileListWithPagination } from '../ProfileListWithPagination'

import {useDispatch, useSelector} from 'react-redux'
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {selectPerformers} from "../../redux/reducers/userReducer";
import {useHttp} from "../../hooks/http.hook";
import {mapResponseToUserList} from "../../api/mapper";
import {updatePerformers} from "../../redux/actions";
import {PERFORMER_ALL} from "../../api/endpoints";



const PerformersPage = (props) => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const performers = useSelector(selectPerformers())

    useEffect(  () => {
        getPerformersFromServer()
    }, [])

    const getPerformersFromServer = async() => {
        try{
            const performersResponse = await request(PERFORMER_ALL, 'GET')
            let performersResult =  await mapResponseToUserList(performersResponse)
            dispatch(updatePerformers(performersResult))
        }
        catch(e){
            console.log('server error occurred: ', e)
        }
    }
    return (
        <>
            <Container className='text-light'>
                {/*<ProfileSearch/>*/}
                <ProfileListWithPagination profiles={performers}/>

            </Container>
        </>
    )
}

export const PerformersPageWithAuthRedirect = WithAuthRedirect(PerformersPage)