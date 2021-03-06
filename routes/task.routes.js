const {Router, response} = require('express');
const DatabaseMapper = require('../mappers/DatabaseMapper');
const router = Router()
const DtoMapper = require('../mappers/DtoMapper')
const TaskRepository = require('../repository/TaskRepository')


router.get('/all', async (req,res)=>{
    try{
        console.log('Executing Get all tasks method');
        console.log(req.query);
        const tasks = await TaskRepository.GetAllTasksAsync(req.query);
        res.send(200, JSON.stringify(DatabaseMapper.MapAllTaks(tasks)));
    }catch(e){
        res.send(500, JSON.stringify(e));
        console.log(e);
    }
});

router.get('/:id',async (req,res)=>{
    try{
        const taskId = DtoMapper.MapFindId(req.params);
        console.log(taskId);
        const tasks =  await TaskRepository.GetTaskById(taskId);
        console.log(tasks);
        res.send(200, DatabaseMapper.MapTask(tasks));
    }
    catch(e){
        console.log(e);
        res.send(400, JSON.stringify(e));
    }
    
});

router.post('/new', async (req,res)=>{
    try{
        const task = DtoMapper.MapTask(req.body);
        const createdTask = await TaskRepository.CreateTaskAsync(task);
        console.log(`Created task ${createdTask}`);
        res.send(200, JSON.stringify(DatabaseMapper.MapTask(createdTask)));
    }catch(e){
        console.log(e);
        res.send(400, JSON.stringify(e));
    }
});

router.post('/status', async (req,res)=>{
    try{
        console.log(`Perfoming update status endpoint ${JSON.stringify(req.body)}`)
        const updateTask = DtoMapper.MapUpdatedStatus(req.body);
        console.log(`Mapped model: ${JSON.stringify(updateTask)}`);
        const newTask = await TaskRepository.UpdateStatsuAsync(updateTask);
        res.send(200, DatabaseMapper.MapTask(newTask));
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
        const assignedTask =  await TaskRepository.AssignTaskTo(assignTaskModel);
        res.send(200,  DatabaseMapper.MapTask(assignedTask));
    }catch(e){
        console.log(e);
        res.send(200, e);
    }
});

router.post('/candidate', async (req,res)=>{
    try{
    const addPerformerModel = DtoMapper.MapCRUDCandidate(req.body);
    const updatedTask = await TaskRepository.AddCandidateAsync(addPerformerModel);
    res.send(200, !(updatedTask == null));
    }catch(e){
        console.log(e)
        res.send(500, e);
    }
});

router.post('/remove/candidate', async (req,res) =>{
    try{
        const removePerformerModel = DtoMapper.MapCRUDCandidate(req.body);
        console.log(`Remove candidate query: ${removePerformerModel}`);
        const updatedTask = await TaskRepository.RemoveCandidateAsync(removePerformerModel);
        res.send(200, JSON.stringify(updatedTask));
        }catch(e){
            res.send(500, e);
        }
});

router.post('/', async (req,res)=>{
    try{
        const task = DtoMapper.MapUpdateTaskDto(req.body);
        const createdTask = await TaskRepository.EditTaskAsync(task);
        console.log(`Created task ${createdTask}`);
        res.send(200, JSON.stringify(DatabaseMapper.MapTask(createdTask)));
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
});


router.delete('/', async (req,res)=>{
    try{
        console.log(req.body);
        const idToDelete = DtoMapper.MapFindId(req.body);
        await TaskRepository.DeleteTaskAsync(idToDelete);
        res.send(200, {result:true});
    }catch(e){
        console.log(e);
        res.send(200, {result: false});
    }
});

router.get('/freelancer/all', async (req,res)=>{
    try{
        console.log(req.query);
        const status = req.query['status'];
        const id = DtoMapper.MapObjectID(req.query['id']);
        const mappedTasks = await TaskRepository.GetFreelancerTasksAsync(id,status);
        res.send(200, JSON.stringify(DatabaseMapper.MapAllTaks(mappedTasks)));
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
});

router.get('/customer/all', async (req,res)=>{
    try{
        console.log(req.query);
        const status = req.query['status'];
        const id = DtoMapper.MapObjectID(req.query['id']);
        const mappedTasks = await TaskRepository.GetCustomerTasksAsync(id,status);
        res.send(200, JSON.stringify(DatabaseMapper.MapAllTaks(mappedTasks)));
    }catch(e){
        console.log(e);
        res.send(500, JSON.stringify(e));
    }
});



module.exports = router


