const {Router} = require('express')
const router = Router()
const DtoMapper = require('../mappers/DtoMapper')
const TaskRepository = require('../repository/TaskRepository')

router.get('/',async (req,res)=>{
    try{
        const body = req.body;
        const task = DtoMapper.MapTask(body);
        const tasks =  await TaskRepository.GetTasksAsync();
        res.send(200, JSON.stringify(tasks));
    }
    catch(e){
        res.send(400, JSON.stringify(e));
    }
    
});

router.get('/:taskId',async (req,res)=>{
});

router.post('/', async (req,res)=>{

});

router.delete('/:taskId', async (req,res)=>{

});

module.exports = router


