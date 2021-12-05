const ProfileDto = require('../dto/ProfileDto')
const TaskDto = require('../dto/TaskDto')
const UserDto = require('../dto/UserDto')
const CheckDto = require('../dto/CheckUserDto')
const ObjectID = require('mongodb').ObjectID;
module.exports = class DtoMapper{
    static MapProfile(body){
        const profile = new ProfileDto();
        profile.email = body['email'];
        profile.name = body['name'];
        profile.skills = body['skills'];
        profile.role = body['role'];
        profile.status = body['status'];
        profile.contact_me = body['contact_me']
        return profile;
    }

    static MapTask(body){
        const task = new TaskDto();
        task.status = this.MapStatus(body['status']);
        task.title = body['title'];
        task.freelancer_id = this.MapObjectID(body['performer_id']);
        task.customer_id = this.MapObjectID(body['customer_id']);
        task.price = body['price'];
        task.description = body['description'];
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
        rate['userFrom'] = body['userFrom'];
        rate['userTo'] = body['userTo'];
        rate['rating'] = body['rating'];
        return rate;
    }

    static MapFreelancer(body){
        const freelancer = {}
        freelancer['_id'] = body['_id'];
        freelancer['user_data'] = body['user_data'];
        freelancer['assigned_tasks'] = body['assigned_tasks'];
        freelancer['skills'] = body['skills'];
        freelancer['rates'] = body['rates'];
        return freelancer;
    }

    static MapCustomer(body){
        const customer= {}
        customer['user_data'] = body['user_data'];
        customer['tasks'] = body['tasks'];
        return customer;
    }

    static MapAddFreelancer(body){
        const addFreelancerModel = {};
        addFreelancerModel['task_id'] = this.MapObjectID(body['task_id']);
        addFreelancerModel['freelancer_id'] = this.MapObjectID(body['freelancer_id']);
        return addFreelancerModel;
    }

    static MapNewTask(body){
        const newTaskModel = {};

    }

    static MapAssignTask(body){
        const assignTaskModel = {};
        assignTaskModel['taskId'] = this.MapObjectID(body['taskId']);
        assignTaskModel['userId'] = this.MapObjectID(body['userId']);
        return assignTaskModel;
    }

    static MapRatingAsync(body){
        const ratingModel = {};
        ratingModel['userFrom'] = this.MapObjectID(body['userFrom']);
        ratingModel['userTo'] = this.MapObjectID(body['userTo']);
        ratingModel['rating'] = body['rating'];
        return ratingModel;
    }

    static MapStatus(body){
        const status = {}
        status['_id'] = body['id'];
        status['name'] = body['name'];
        return status;
    }

    static MapObjectID(id){
        return new ObjectID(id);
    }

    static MapUpdatedStatus(body){
        const updateStatus = {}
        updateStatus['task_id'] = this.MapObjectID(body['task_id']);
        updateStatus['status'] =this.MapStatus(body['status']);
        return updateStatus; 
    }
}

