const Customer = require("../models/Customer");

module.exports = class DatabaseMapper{

    static MapUserRating(UserModel){
        const ratingArray = UserModel.rates;
        //console.log(`RatingArray ${ratingArray}`);
        const sum = ratingArray.map(x => x.rating).reduce((a, b) => a + b, 0);
        const avg = (sum / ratingArray.length) || 0;
        return avg; 
    }

    static MapUserProfile(UserModel){
        //console.log(`Before profile ${UserModel}`);
        console.log(`Role OBJ ${UserModel.role}`);
        const mappedUser = {...UserModel, role: this.MapRole(UserModel.role)};
        //console.log(`After profile ${JSON.stringify(mappedUser)}`);
        mappedUser.rating = this.MapUserRating(UserModel);
        console.log(`Mapped user ${JSON.stringify(mappedUser)}`);
        delete mappedUser.rates;
        return mappedUser;
    }

    static MapRole(RoleModel){
        return RoleModel.name;
    }

    static MapFreelancer(FreelancerModel){
        //console.log(`Mapping freelancer ${JSON.stringify(FreelancerModel)}`)
        if(FreelancerModel == null){
            return undefined;
        }
        const freelancerModel = {...this.MapDBObject(FreelancerModel)};
        console.log("Model after DECOMPOSITION", freelancerModel);
        freelancerModel.user_data = this.MapUserProfile(freelancerModel.user_data);
        console.log("MAPPED FREELANCER", freelancerModel);
        return freelancerModel;
    }

    static MapCustomer(CustomerModel){
        //console.log(`Mapping customer ${JSON.stringify(CustomerModel)}`)
        if(CustomerModel == null){
            return undefined;
        }
        const customerModel = {...this.MapDBObject(CustomerModel)};
        customerModel.user_data = this.MapUserProfile(customerModel.user_data);
        return customerModel;
    }

    static MapRoleProfile(UserModel){
        const mappedUSer = {...this.MapDBObject(UserModel)};
        //console.log(`Mapping customer ${JSON.stringify(mappedUSer)}`);
        mappedUSer.user_data = this.MapUserProfile(mappedUSer.user_data);
        return mappedUSer;
    }

    static MapDBObject(obj){
        return JSON.parse(JSON.stringify(obj));
    }


    static MapAllCustomers(CustomerArray){
        return CustomerArray.map(x=> this.MapCustomer(x));
    }

    static MapAllFreelancers(FreelancerArray){
        return FreelancerArray.map(x=>this.MapFreelancer(x));
    }
    static MapStatus(status){
        return status.name;
    }

    static MapTask(Task){
        Task = this.MapDBObject(Task);
        Task.customer = this.MapCustomer(Task.customer);
        console.log(Task.performer);
        Task.performer = this.MapFreelancer(Task.performer);
        const freelancers = this.MapAllFreelancers(Task.candidates);
        Task.candidates = freelancers;
        console.log("TASK CANDIDATES",freelancers);
        const statusName = Task.status.name;
        delete Task.status;
        Task.status = statusName;
        console.log('TASK STATUS',Task.status);
        return Task;
    }

    static MapAllTaks(TaskArray){
        return TaskArray.map(x=> this.MapTask(x));
    }
}