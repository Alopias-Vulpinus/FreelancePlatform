const {Router} = require('express')
const router = Router()


router.get('/:code', async (req, res) => {
    res.send(200)
})


module.exports = router
