const express = require ('express')
const { registerAdmin, loginAdmin, getAdmin } = require('../controllers/admin.controllers')
const isAdmin = require('../middlewares/isAdmin')
const { registerRules ,validator} = require('../middlewares/validator')
const router = express.Router()

router.post('/registerAdmin',registerRules(),validator,registerAdmin)
router.post('/loginAdmin',loginAdmin)
router.get('/getAdmin',isAdmin,getAdmin)
module.exports=router 