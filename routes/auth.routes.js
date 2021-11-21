const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()
const UserRepository = require('../repository/UserRepository')


router.post('/create/customer/google',async (req,res)=>{
    try{
        console.log('Method Revieved');
        const userProfile = req.body.profileObj;
        console.log(req.body);
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        const userData = await UserRepository.GetByIdAsync(userProfile.googleId);
        if(userData){
          console.log(`User with id ${userProfile.googleId} have been created yet`);
          res.send(200,JSON.stringify(userData));
          return;
        }

        var result =  await UserRepository.CreateCustomerAsync(userProfile.googleId,
            userProfile.givenName,
            userProfile.givenName,
            userProfile.imageUrl,
            'Customer');  
        res.send(200,JSON.stringify(result));
    }
    catch(e){
        console.log(`Error accured while creating user:${e}`);
        res.send(400, JSON.stringify(e));
    }
});

router.post('/create/freelancer/google', async (req,res)=>{
  try{
    console.log('Method Revieved');
    const userProfile = req.body.profileObj;
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    var result =  await UserRepository.CreateFreelancerAsync(userProfile.googleId,
        userProfile.givenName,
        userProfile.givenName,
        userProfile.imageUrl,
        "Freelancer");  
    res.send(200,JSON.stringify(result));
  }
  catch(e){
    console.log(`Error accured while creating user:${e}`);
    res.send(500, JSON.stringify(e));
  }
});

router.post('/create/facebook',async (req,res)=>{

});

router.post('/create/vk', async (req,res)=>{
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
