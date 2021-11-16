const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()
const UserRepository = require('../repository/UserRepository')


router.post('/create/google',async (req,res)=>{
    try{
        console.log('Method Revieved');
        const userProfile = req.body.profileObj;
        var result =  await UserRepository.CreateUserAsync(userProfile.googleId,
            userProfile.givenName,
            userProfile.givenName,
            userProfile.imageUrl);  
        res.send(200,JSON.stringify(result));
    }
    catch(e){
        console.log(`Error accured while creating user:${e}`);
        res.send(400, JSON.stringify(e));
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
