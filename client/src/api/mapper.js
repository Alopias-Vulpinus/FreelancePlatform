export const mapResponseToUser = (response) => {
    const user = {}
    if(!response || !response.user_data){
        return user
    }
    user.id = response._id
    user.username = response.user_data.email || ''
    user.role = response.user_data.role
    user.firstName = response.user_data.name || ''
    user.lastName = response.user_data.family_name || ''
    user.imageUrl = response.user_data.image_url
    user.status = response.user_data.status || ''
    user.contactMe = response.user_data.contact_me || ''
    user.rating = response.user_data.rating || 0
    user.skills = response.skills || []
    return user
}

export const mapResponseToUserList = (response) => {
    const users = response.users.map(u => mapResponseToUser(u))
    return users
}

export const mapResponseToCandidates = (response) => {
    const users = response.map(u => mapResponseToUser(u))
    return users
}

export const mapResponseToTask = (response) => {
    return {
        id : response._id,
        customer : mapResponseToUser(response.customer),
        performer : response.performer,
        status : response.status,
        title : response.title,
        price : response.price,
        description: response.description
    }
}

export const mapResponseToTaskList = (response) => {
    const tasks = response.map(t => mapResponseToTask(t))
    return tasks
}