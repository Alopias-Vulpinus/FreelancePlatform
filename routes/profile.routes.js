const ProfileRepository = require('../repository/ProfileRepository')
const DtoMapper = require('../mappers/DtoMapper')
const DatabaseMapper = require('../mappers/DatabaseMapper')
const {Router} = require('express');
const router = Router()

router.post('/',(req,res)=>{
    try{
    const profileDto = DtoMapper.MapProfile(req.body);
    ProfileRepository.ChangeProfileAsync(profileDto);
    res.send(200);
    }
    catch(e){
        res.send(500);
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

router.get('/', async (req,res)=>{
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