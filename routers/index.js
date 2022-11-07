const Router = require('express');
const router = new Router();

const User = require('./userRouter');

router.use('/user', User);

module.exports = router;
