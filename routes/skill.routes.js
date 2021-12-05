const {Router} = require('express');
const router = Router()
const SkillRepository = require('../repository/SkillRepository')

router.post('/',async (req,res)=>{
    try{
    const {name} = req.body;
    const skill = await SkillRepository.CreateSkillAsync(name);
    res.send(200, JSON.stringify(skill));
    }
    catch(e){
        res.send(500, JSON.stringify(e));
    }

})

router.get('/all',async (req,res)=>{
    try{
        console.log('trying to get all skills');
        const skills = await SkillRepository.GetAllSkillsAsync();
        res.send(200, JSON.stringify(skills));
    }
    catch(e){
        res.send(500, JSON.stringify(e));
    }
});


module.exports = router;