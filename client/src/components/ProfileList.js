import React from "react"
import { Profile } from "./Profile"

export const ProfileList = (props) => {

    const profiles = props.profiles

    return (
    <>
        <div className='profile-list_container'>
            {
                profiles.map((profile, i) => <Profile profile={profile} key={i} />)
            }
        </div>
    </>)
}