const {Router} = require('express');
const router = Router()
const RoleRepository = require('../repository/RoleRepository')


router.post('/',async (req,res)=>{
    try{
        const {name} = req.body;
        const savedRole = await RoleRepository.CreateRoleAsync(name);
        res.send(200, JSON.stringify(savedRole));
    }catch(e){
        res.send(500, e);
    }
});

router.get('/', async (req,res)=>{
    try{
        const allRoles = await RoleRepository.GetAllRoles();
        res.send(200, JSON.stringify(allRoles));
    }catch(e){
        res.send(500, e);
    }
});


module.exports = router;

