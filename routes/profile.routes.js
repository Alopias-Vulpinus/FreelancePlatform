const ProfileRepository = require('../repository/ProfileRepository')
const DtoMapper = require('../mappers/DtoMapper')
const {Router} = require('express')
const router = Router()

router.post('/',(req,res)=>{
    try{
    const profileDto = DtoMapper.MapProfile(req.body);
    ProfileRepository.ChangeProfileAsync(profileDto);
    }
    catch(e){
        
    }
});

module.exports = router