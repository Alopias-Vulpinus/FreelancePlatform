const {Router} = require('express')
const User = require('../models/User')
const router = Router()
const UserRepository = require('../repository/UserRepository')
const DtoMapper = require('../mappers/DtoMapper')
const DatabaseMapper = require('../mappers/DatabaseMapper')

const CUSTOMER_ROLE = 'customer';
const FREELANCER_ROLE = 'freelancer';

router.post('/login/customer/google',async (req,res)=>{
        const userDto = DtoMapper.MapGoogleUser(req.body);
        const userData = await UserRepository.GetCustomerByIdAsync(userDto.socialId, CUSTOMER_ROLE);
        console.log(`fount user ${userData}`)
        if(userData){
          console.log(`User with id ${userData} have been created yet`);
          res.send(200, JSON.stringify( DatabaseMapper.MapCustomer(userData)));
          return;
        }
        
        var result =  await UserRepository.CreateCustomerAsync(userDto,CUSTOMER_ROLE);  
        res.send(200,JSON.stringify(DatabaseMapper.MapCustomer(result)));
});

router.post('/login/freelancer/google', async (req,res)=>{
  try{
    const userDto = DtoMapper.MapGoogleUser(req.body);
    const userData = await UserRepository.GetFreelancerByIdAsync(userDto.socialId, FREELANCER_ROLE);
    if(userData){
      res.send(200,JSON.stringify(DatabaseMapper.MapFreelancer(userData)));
      return;
    }
    var result =  await UserRepository.CreateFreelancerAsync(userDto,FREELANCER_ROLE);  
    res.send(200,JSON.stringify((DatabaseMapper.MapFreelancer(result))));
  }
  catch(e){
    console.log(`Error accured while creating user:${e}`);
    res.send(500, JSON.stringify(e));
  }
});

router.post('/login/facebook',async (req,res)=>{

});

router.post('/login/vk', async (req,res)=>{
    const userData = req.body.session.user;
    try{
    var result = await UserRepository.CreateUserAsync(userData.id,
        userData.first_name,
        userData.last_name);
    res.send(200,JSON.stringify(result));
    }
    catch(e){
        console.log(`Error accured while creating user:${e}`);
        res.send(400, JSON.stringify(e));
    }
});

module.exports = router
