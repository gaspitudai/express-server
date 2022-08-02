const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole } = require('../helpers/db.validator');
const { 
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch } = require('../controllers/user.controller');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post('/', [
    check('name', 'Name is required.').not().isEmpty(),
    check('password', 'Password must be major of 6 chars.').isLength({ min: 6 }),
    check('email', 'Email is not valid.').isEmail(),
    check('role').custom(isValidRole),
    // check('role').custom(async (role = '') => {
        // const existRole = await Role.findOne({ role });
        // if (!existRole) {
        //     throw new Error(`Role ${role} is not registered on DB.`)
        // }
    // }),
    validateFields
], usersPost);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

module.exports = router;