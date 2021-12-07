import React from "react"
import Select from "react-select"
import { useDispatch } from "react-redux"
import {changeSignInRole} from './../redux/actions'

export const SelectRole = (props) => {
    const options = [
        { value: 'customer', label: 'Customer' },
        { value: 'performer', label: 'Performer' }];
    const defaultOption = options.find(opt => opt.value === 'customer');

    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        console.log(event.value)
        dispatch(changeSignInRole(event.value))
    }
    return <Select 
                defaultValue={defaultOption}
                options={options} 
                placeholder='Choose Role'
                onChange={onChangeHandler}
    />
}