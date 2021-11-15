import React from "react"
import Select from "react-select"

export const SelectRole = (props) => {
    const options = [
        { value: 'Customer', label: 'Customer' },
        { value: 'Performer', label: 'Performer' }];
    const defaultOption = options.find(opt => opt.value === props.role);
    console.log(defaultOption);
    return <Select 
                defaultValue={defaultOption}
                options={options} 
                placeholder='Choose Role'
    />
}