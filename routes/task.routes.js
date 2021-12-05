const {Router} = require('express')
const router = Router()
const DtoMapper = require('../mappers/DtoMapper')
const TaskRepository = require('../repository/TaskRepository')

router.get('/',async (req,res)=>{
    try{
        const tasks =  await TaskRepository.GetTasksAsync();
        res.send(200, JSON.stringify(tasks));
    }
    catch(e){
        res.send(400, JSON.stringify(e));
    }
    
});

router.get('/:taskId',async (req,res)=>{
});

router.post('/new', async (req,res)=>{
    try{
        const task = DtoMapper.MapTask(req.body);
        const createdTask = TaskRepository.CreateTaskAsync(task);
        res.send(200, JSON.stringify(createdTask));
    }catch(e){
        res.send(400, JSON.stringify(e));
    }
});

router.delete('/:taskId', async (req,res)=>{
    
});

router.post('/status', async (req,res)=>{
    try{
        console.log(`Perfoming update status endpoint ${JSON.stringify(req.body)}`)
        const updateTask = DtoMapper.MapUpdatedStatus(req.body);
        console.log(`Mapped model: ${JSON.stringify(updateTask)}`);
        const newTask = await TaskRepository.UpdateStatsuAsync(updateTask);
        res.send(200, JSON.stringify(newTask));
    }
    catch(e){
        console.log(`Error while performing update statsu: ${JSON.stringify(e)}`);
        res.send(500, JSON.stringify(e));
    }
});

router.post('/performer', async(res,req)=>{

});

router.post('/assign', async (req,res)=>{
    const assignTaskModel = DtoMapper.MapAssignTask(req.body);
    try{
        TaskRepository.AssignTaskTo(assignTaskModel);
        req.send(200, {result: true});
    }catch(e){
        req.send(200, {result: false});
    }
});

module.exports = router


