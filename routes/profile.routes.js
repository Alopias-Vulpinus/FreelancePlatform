const ProfileRepository = require('../repository/ProfileRepository')
const DtoMapper = require('../mappers/DtoMapper')
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
})
module.exports = router