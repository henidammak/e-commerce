const express = require ('express')
const { add, get, getOne ,deletee, put } = require('../controllers/product.controllers')
const router = express.Router()

router.post('/add',add)
router.get('/get',get)
router.get('/get/:id',getOne)
router.delete('/delete/:id', deletee )
router.put('/update/:id', put )




module.exports=router 