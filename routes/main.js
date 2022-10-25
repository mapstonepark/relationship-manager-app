const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.get('/login', authController.postLogin)
router.get('/signup', authController.getSignup)
router.get('/signup', authController.postSignup)


module.exports = router