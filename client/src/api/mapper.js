const user_example = {
    id: '1',
    username: 'dimasiandro@yandex.by',
    role: 'customer',
    firstName : 'Dmitriy',
    lastName: 'Belotskiy',
    status: 'I love code',
    contactMe: 'https://vk.com/dimasiandro',
    rating : 4,
    skills : ['Python', 'Java' ],
}

export const mapResponseToUser = (response) => {
    if(!response._id){
        return user_example
    }
    const user = {}
    user.id = response._id
    user.username = response.user_data.email
    user.role = response.user_data.role.name
    user.firstName = response.user_data.name
    user.lastName = response.user_data.family_name
    user.imageUrl = response.user_data.image_url
    user.status = response.user_data.status
    user.contactMe = response.user_data.contact_me
    user.rating = response.user_data.rating
    user.skills = response.user_data.skills
    user.taskIds = response.task_ids
    return user
}

export const mapResponseToUserList = (response) => {
    if(!response.users){
        response.users = [{}, {}, {}, {}, {}, {}]
    }
    const users = response.users.map(u => mapResponseToUser(u))
    return users
}


const user_example2 = {
    id: '1',
    username: 'dimasiandro@yandex.by',
    role: 'performer',
    firstName : 'Kirill',
    lastName: 'Akulich',
    status: 'I love code',
    contactMe: 'https://vk.com/dimasiandro',
    rating : 5,
    skills : ['Python', 'Java' ]
}

export const mapResponseToUser2 = (response) => {
    return user_example2
}

const task_example = {
    id : '1',
    title : 'some title',
    description : 'some description',
    price : '50$',
    author : 'USER_ID BY NOW',
    status : 'new'
}

export const mapResponseToTask = (response) => {
    if(!response._id){
        return task_example
    }
    // mapping logic
}

export const mapResponseToTaskList = (response) => {
    if(!response.tasks){
        response.tasks = [{}, {}, {}, {}, {}, {}]
    }
    const tasks = response.tasks.map(t => mapResponseToTask(t))
    return tasks
}