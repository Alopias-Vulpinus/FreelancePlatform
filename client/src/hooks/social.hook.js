export const useSocials = () => {
    const responseGoogle = async (response) => {
        console.log('Google creds')
        console.log(response)
        const body = JSON.stringify(response)
        const headers ={}
        const method = 'POST'
        headers['Content-Type'] = 'application/json'
        console.log(`sendingBody ${body}`)
        await fetch('/auth/create/customer/google', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(response) // body data type must match "Content-Type" header
          });
    }
    
    const responseFacebook = (response) => {
        console.log('Facebook creds')
        console.log(response)
    }
    
    const responseVkontakte = async (response) => {
        console.log('VK creds')
        console.log(response)
        const body = JSON.stringify(response)
        const headers ={}
        const method = 'POST'
        headers['Content-Type'] = 'application/json'
        console.log(`sendingBody ${body}`)
        await fetch('/auth/create/vk', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(response) // body data type must match "Content-Type" header
          });
    }

    return {responseGoogle, responseFacebook, responseVkontakte}
}