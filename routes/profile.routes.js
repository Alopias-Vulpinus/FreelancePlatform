const ProfileRepository = require('../repository/ProfileRepository')
const DtoMapper = require('../mappers/DtoMapper')
const {Router} = require('express')
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

module.exports = router