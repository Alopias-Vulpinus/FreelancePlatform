import React from 'react'


export const AboutUsPage = () => {
    return (
        <>
            <div className='home-container black-bg'>
                <h1> ABOUT US </h1>
                <span style={{fontSize:'1.4rem'}}> 'Freelance Platform' web application was written by a start-up company 
                    'Alopias-Vulpinus'. The name is a species of fish in Latin, that consists of words 'fox'
                    and 'shark' - our totem animals! Here is the git repository with the source code: 
                    <p> <a href = 'https://github.com/Alopias-Vulpinus/FreelancePlatform' target='blank'> https://github.com/Alopias-Vulpinus/FreelancePlatform</a> </p>
                </span>
            </div>
        </>
    )
}