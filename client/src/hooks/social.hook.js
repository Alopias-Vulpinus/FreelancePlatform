export const useSocials = () => {
    const responseGoogle = (response) => {
        console.log('Google creds')
        console.log(response)
    }
    
    const responseFacebook = (response) => {
        console.log('Facebook creds')
        console.log(response)
    }
    
    const responseVkontakte = response => {
        console.log('VK creds')
        console.log(response)
    }

    return {responseGoogle, responseFacebook, responseVkontakte}
}