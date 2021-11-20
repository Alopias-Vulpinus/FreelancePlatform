import React from "react"
import { Profile } from "./Profile"

export const ProfileList = (props) => {
    const profiles = props.profiles || [{
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
        <div className='profile-list_container'>
            {
                profiles.map((profile, i) => <Profile profile={profile} key={i} />)
            }
        </div>
    </>)
}