import React from "react"
import { Profile } from "./Profile"
import {NavLink} from "react-router-dom";

export const ProfileList = ({profiles}) => {
    return (
    <>

            <div className='profile-list_container'>
                {
                    profiles.map((profile) =>
                        <NavLink className="nav-link" to={`/profile/${profile.id}` } key={profile.id}>
                            <Profile profile={profile}  />
                        </NavLink>)
                }
            </div>
    </>)
}