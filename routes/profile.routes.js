const ProfileRepository = require('../repository/ProfileRepository')
const CustomerRepository = require('../repository/CustomerRepository')
const FreelancerRepository = require('../repository/FreelancerRepository')
const DtoMapper = require('../mappers/DtoMapper')
const DatabaseMapper = require('../mappers/DatabaseMapper')
const {Router} = require('express')
const Customer = require('../models/Customer')
const router = Router()

const CUSTOMER_ROLE = "customer";
const FREELANCER_ROLE = "freelancer";

router.post('/',async (req,res)=>{
    try{
        const profileDto = DtoMapper.MapUserData(req.body);
        console.log(`Profile DTO: ${ JSON.stringify(profileDto)}`);
        const foundUser = await ProfileRepository.GetUserByIdRole({id: profileDto._id});
        if(foundUser.user_data.role.name == CUSTOMER_ROLE){
            const updatedCustomer = await CustomerRepository.UpdateCustomerAsync(profileDto);
            console.log(`Updated customer: ${JSON.stringify(updatedCustomer)}`);
            updatedModel = DatabaseMapper.MapCustomer(updatedCustomer);
        }
        else{
            const updatedFreelancer = await FreelancerRepository.UpdateFreelancerAsync(profileDto)
            updatedModel = DatabaseMapper.MapFreelancer(updatedFreelancer);
        }
        res.send(200,JSON.stringify(updatedModel));
        /*
    const profileDto = DtoMapper.MapProfile(req.body);
    await ProfileRepository.ChangeProfileAsync(profileDto);
    */
    }
    catch(e){
        console.log(e);
        res.send(500,JSON.stringify(e));
    }
});

router.get('/:id', async (req,res)=>{
    try{
        const idToFind = DtoMapper.MapFindId({id: req.params['id']});
        console.log(`ID: ${idToFind}`);
        const foundUser = await ProfileRepository.GetUserByIdRole(idToFind);
        console.log(`Found user ${foundUser}`);
        const mappedUSer = DatabaseMapper.MapRoleProfile(foundUser);
        res.send(200, JSON.stringify(mappedUSer));
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
});

router.get('/exists/:id',async (req,res)=>{
    try{
    const checkDto = DtoMapper.MapCheckUser(req.params);
    const isExists = await  ProfileRepository.CheckIfUserExistsAsync(checkDto);
    res.send(200, {result: isExists});
    }
    catch(e){
        res.send(500);
    }
});

router.get('/all', async (req,res)=>{
    try{
        const users  = await ProfileRepository.GetAllUserProfilesAsync();
        res.send(200, JSON.stringify(users));
    }catch(e){
        res.send(500,e);
    }
})

router.post('/customer/rate', async (req,res)=>{
    try{
        console.log('Request body',JSON.stringify(req.body));
        const ratingModel = DtoMapper.MapRating(req.body);
        console.log('RatingModel',JSON.stringify(ratingModel));
        const ratingExists = await CustomerRepository.CheckIfRatingExists(ratingModel);
        var userModel = undefined;
        if(ratingExists){
            userModel =  await CustomerRepository.UpdateRatingAsync(ratingModel);
        }else{
            userModel = await CustomerRepository.RateUserAsync(ratingModel);
        }
        console.log('UserModel',JSON.stringify(userModel))
        const result = DatabaseMapper.MapUserRating(userModel.user_data);
        res.send(200, {result});
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
})


router.post('/freelancer/rate', async (req,res)=>{
    try{
        console.log('Request body',JSON.stringify(req.body));
        const ratingModel = DtoMapper.MapRating(req.body);
        console.log('RatingModel',JSON.stringify(ratingModel));
        const ratingExists = await FreelancerRepository.CheckIfRatingExists(ratingModel);
        var userModel = undefined;
        if(ratingExists){
            userModel =  await FreelancerRepository.UpdateRatingAsync(ratingModel);
        }else{
            userModel = await FreelancerRepository.RateUserAsync(ratingModel);
        }

        console.log('UserModel',JSON.stringify(userModel))
        const result = DatabaseMapper.MapUserRating(userModel.user_data);
        res.send(200, {result});
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
})

module.exports = router