const express=require('express');

const router =express.Router();

const optionController=require('../controllers/option_controller');


router.post('/:id/create',optionController.create);
router.post('/:id/add_vote',optionController.addvote);


module.exports=router;
