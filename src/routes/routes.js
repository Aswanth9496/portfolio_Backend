
const router = require('express').Router()


const {getSkills,getServices, sendEmail} = require('../controllers/controllers')


router.get('/skills',getSkills);
router.get('/services',getServices);

router.post('/contact',sendEmail);



module.exports = router;



