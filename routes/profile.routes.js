const ProfileRepository = require('../repository/ProfileRepository')
const CustomerRepository = require('../repository/CustomerRepository')
const FreelancerRepository = require('../')
const DtoMapper = require('../mappers/DtoMapper')
const DatabaseMapper = require('../mappers/DatabaseMapper')
const {Router} = require('express')
const router = Router()

const CUSTOMER_ROLE = "customer";
const FREELANCERROLE = "freelancer";

router.post('/',async (req,res)=>{
    try{
        const profileDto = DtoMapper.MapUserData(req.body);
        console.log(`Profile DTO: ${ JSON.stringify(profileDto)}`);
        var updatedModel;
        if(profileDto.user_data.role == CUSTOMER_ROLE){
            const updatedCustomer = await CustomerRepository.UpdateCustomerAsync(profileDto);
            console.log(`Updated customer: ${JSON.stringify(updatedCustomer)}`);
            updatedModel = DatabaseMapper.MapCustomer(updatedCustomer);
        }
        else{
            const updatedFreelancer = await FreelancerRepository.UpdateFreelancerAsync()
        }
        res.send(200,updatedModel);
        /*
    const profileDto = DtoMapper.MapProfile(req.body);
    await ProfileRepository.ChangeProfileAsync(profileDto);
    */
    }
    catch(e){
        console.log(e);
        res.send(500);
    }
});

router.get('/', async (req,res)=>{
    try{
        const idToFind = DtoMapper.MapFindId(req.body);
        const foundUser = await ProfileRepository.GetUserByIdRole(idToFind);
        console.log(`Found user ${foundUser}`);
        const mappedUSer = DatabaseMapper.MapRoleProfile(foundUser);
        res.send(200, JSON.stringify(mappedUSer));
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
});

router.get('/exists',async (req,res)=>{
    try{
    const checkDto = DtoMapper.MapCheckUser(req.body);
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

router.post('/rate', async (req,res)=>{
    try{
        console.log(JSON.stringify(req.body));
        const ratingModel = DtoMapper.MapRating(req.body);
        console.log(JSON.stringify(ratingModel));
        const ratingExists = await ProfileRepository.CheckIfRatingExists(ratingModel);
        var userModel = undefined;
        if(ratingExists){
            userModel =  await ProfileRepository.UpdateRatingAsync(ratingModel);
        }else{
            userModel = await ProfileRepository.RateUserAsync(ratingModel);
        }
        console.log(JSON.stringify(userModel))
        const result = DatabaseMapper.MapUserRating(userModel);
        res.send(200, {result});
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
})


module.exports = router