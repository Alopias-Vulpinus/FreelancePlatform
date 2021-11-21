const ProfileRepository = require('../repository/ProfileRepository')
const DtoMapper = require('../mappers/DtoMapper')
const {Router} = require('express');
const { route } = require('./auth.routes');
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

router.get('/customers', async (req,res)=>{

});

router.get('/freelancers', async (req,res)=>{

});

router.get('/customer/:id', async (req,res)=>{

});

router.get('/freelancer/:id', async (req,res)=>{

});


module.exports = router