const express = require('express')
const {contactRegister, getAllContactForm, getSingleForm, deleteForm } =  require('./controller')


const router = express.Router()

router.post('/register' , contactRegister)
router.get('/all' , getAllContactForm)
router.get('/:id' , getSingleForm)
router.delete('/:id' , deleteForm)
module.exports = router