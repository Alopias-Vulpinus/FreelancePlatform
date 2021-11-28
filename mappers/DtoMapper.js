const ProfileDto = require('../dto/ProfileDto')
const TaskDto = require('../dto/TaskDto')
const UserDto = require('../dto/UserDto')
const CheckDto = require('../dto/CheckUserDto')
module.exports = class DtoMapper{
    static MapProfile(body){
        const profile = new ProfileDto();
        profile.email = body['email'];
        profile.name = body['name'];
        profile.skills = body['skills'];
        profile.role = body['role'];
        profile.status = body['status'];
        return profile;
    }

    static MapTask(body){
        const task = new TaskDto();
        task.status = body['status'];
        task.freelancer = body['freelancer'];
        task.customer = body['customer'];
        task.payment = body['payment'];
        task.due_date = body['due_date'];
        task.acceptance_criteria = body['acceptance_criteria'];
        task.progress = body['progress'];
        return task;
    }

    static MapGoogleUser(body){
        const userProfile = body.profileObj;
        console.log(`User profile ${JSON.stringify(userProfile)}`);
        const userDto = new UserDto();
        userDto.socialId = userProfile['googleId'];
        userDto.firstName = userProfile['givenName'];
        userDto.sencondName = userProfile['familyName'];
        userDto.imageUrl = userProfile['imageUrl'];
        return userDto;
    }

    static MapCheckUser(body){
        const checkUser = new CheckDto();
        checkUser.social_id = body['social_id'];
        checkUser.role_name = body['role_name'];
        return checkUser;
    }

    static MapTaskStatus(body){
        const taskStatus = {};
        taskStatus['freelancer_id'] = body['freelancer_id'];
        taskStatus['status_name'] = body['status_name'];
        return taskStatus;
    }

    static MapRating(body){
        const rate ={};
        rate['freelancer_id'] = body['freelancer_id'];
        rate['customer_id'] = body['customer_id'];
        rate['rate'] = body['rate'];
        return rate;
    }

    static MapFreelancer(body){
        const freelancer = {}
        freelancer['_id'] = body['_id'];
        freelancer['user_data'] = body['user_data'];
        freelancer['assigned_tasks'] = body['assigned_tasks'];
        freelancer['skills'] = body['skills'];
        freelancer['contacts'] = body['contacts'];
        freelancer['rates'] = body['rates'];
        return freelancer;
    }

    static MapCustomer(body){
        const customer= {}
        customer['user_data'] = body['user_data'];
        customer['tasks'] = body['tasks'];
        return customer;
    }
}

