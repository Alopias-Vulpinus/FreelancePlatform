
const DtoMapper = require('../mappers/DtoMapper')
const {Router} = require('express');
const router = Router()
const CustomerRepository = require('../repository/CustomerRepository')


router.get('/all', async (req,res)=>{
    try{
        const customers = await CustomerRepository.GetAllAccountsAsync();
        res.send(200, JSON.stringify(customers));
    }catch(e){
        res.send(500, JSON.stringify(e));
    }
});

router.post('/',async (req,res)=>{

});


module.exports = router;