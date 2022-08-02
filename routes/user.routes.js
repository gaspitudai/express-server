const { Router } = require('express');
const { usersGet, usersPut, usersPost, usersDelete, usersPatch } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post('/', [
    check('name', 'Name is required.').not().isEmpty(),
    check('password', 'Password must be major of 6 chars.').isLength({ min: 6 }),
    check('email', 'Email is not valid.').isEmail(),
    // check('role', 'Role is not valid.').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateFields
], usersPost);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

module.exports = router;