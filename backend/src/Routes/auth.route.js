const {Router} = require('express');
const router= Router();

const {signUp, signIn} = require('../Controllers/auth.controllers');

router.route('/signup')
    .post(signUp);

router.route('/signin')
    .post(signIn);

module.exports = router;