const ProfileDto = require('../dto/ProfileDto')
const TaskDto = require('../dto/TaskDto')
const UserDto = require('../dto/UserDto')
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
        const userDto = new UserDto();
        userDto.socialId = userProfile['googleId'];
        userDto.firstName = userProfile['givenName'];
        userDto.sencondName = userProfile['familyName'];
        userDto.imageUrl = userProfile['imageUrl'];
        return userDto;
    }
}

