const DtoMapper = require('../mappers/DtoMapper')
const {Router} = require('express');
const router = Router()
const CustomerRepository = require('../repository/CustomerRepository')
const DatabaseMapper = require('../mappers/DatabaseMapper')

router.get('/all', async (req,res)=>{
    try{
        const customers = await CustomerRepository.GetAllAccountsAsync();
        res.send(200, JSON.stringify({users: DatabaseMapper.MapAllCustomers(customers)}));
    }catch(e){
        res.send(500, JSON.stringify(e));
    }
});

router.post('/',async (req,res)=>{
    try{
        DtoMapper.MapCustomer();
    }catch(e){
        res.send(500, JSON.stringify(e));
    }
});


module.exports = router;