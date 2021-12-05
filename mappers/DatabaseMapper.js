module.exports = class DatabaseMapper{

    static MapUserRating(UserModel){
        const ratingArray = UserModel.rates;
        console.log(`RatingArray ${ratingArray}`);
        const sum = ratingArray.map(x => x.rating).reduce((a, b) => a + b, 0);
        const avg = (sum / ratingArray.length) || 0;
        return avg; 
    }

    static MapUserProfile(UserModel){
        console.log(`Before profile ${UserModel}`);
        const mappedUser = {...UserModel};
        console.log(`After profile ${JSON.stringify(mappedUser)}`);
        mappedUser.rating = this.MapUserRating(UserModel);
        mappedUser.role = this.MapRole(UserModel.role);
        delete mappedUser.rates;
        return mappedUser;
    }

    static MapRole(RoleModel){
        return RoleModel.name;
    }

    static MapFreelancer(FreelancerModel){
        const freelancerModel = {...this.MapDBObject(FreelancerModel)};
        freelancerModel.user_data = this.MapUserProfile(freelancerModel.user_data);
        return freelancerModel;
    }

    static MapCustomer(CustomerModel){
        const customerModel = {...this.MapDBObject(CustomerModel)};
        customerModel.user_data = this.MapUserProfile(customerModel.user_data);
        return customerModel;
    }

    static MapRoleProfile(UserModel){
        const mappedUSer = {...this.MapDBObject(UserModel)};
        console.log(`Mapping customer ${JSON.stringify(mappedUSer)}`);
        mappedUSer.user_data = this.MapUserProfile(mappedUSer.user_data);
        return mappedUSer;
    }

    static MapDBObject(obj){
        return JSON.parse(JSON.stringify(obj));
    }
}