const {Router} = require('express');
const router = Router()
const StatusRepository = require('../repository/StatusRepository')

router.post('/',async (req,res)=>{
    try{
        const {name} = req.body;
        const status = await StatusRepository.CreateStatusAsync(name);
    res.send(200, JSON.stringify(status));
    }
    catch(e){
        console.log(`error accured adding status ${e}`);
        res.send(500, JSON.stringify(e));
    }
});

router.get('/', async (req,res)=>{
    try{
        const statuses = await StatusRepository.GetAllStatusesAsync();
        res.send(200, JSON.stringify(statuses));
    }catch(e){
        res.send(500, JSON.stringify(e));
    }
});


module.exports = router;