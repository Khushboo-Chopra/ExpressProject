const express = require('express');
const friendsController = require('../controllers/friends.controller');


//Routers
const friendsRouter = express.Router();

//custom middleware
friendsRouter.use((req,res,next)=>{
    console.log('ip address : ' , req.ip);
    next();
})

//post request
friendsRouter.post('/',friendsController.postFriend);

friendsRouter.get('/',friendsController.getFriends );

friendsRouter.get('/:friendId',friendsController.getFriend);

module.exports = friendsRouter;