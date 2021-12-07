const DtoMapper = require('../mappers/DtoMapper')
const {Router} = require('express');
const router = Router()
const FreelancerRepository = require('../repository/FreelancerRepository')
const DatabaseMapper = require('../mappers/DatabaseMapper')

router.post('/rate', async (req,res)=>{

});

router.post('/', async (req,res)=>{
    try{
        const freelancer = DtoMapper.MapFreelancer(req.body);
        const updatedFreelancer =await  FreelancerRepository.UpdateFreelancerAsync(freelancer);
        res.send(200, JSON.stringify(updatedFreelancer));
    }
    catch(e){
        res.send(500, JSON.stringify(e));
    }
});

router.get('/all', async (req,res)=>{
    try{
        const freelancers = await FreelancerRepository.GetAllAccountsAsync();
        res.send(200, JSON.stringify({users: DatabaseMapper.MapAllFreelancers(freelancers)}));
    }catch(e){
        res.send(500, JSON.stringify(e));
    }
})

module.exports = router;
