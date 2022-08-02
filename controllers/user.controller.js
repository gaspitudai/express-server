const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const usersGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API - controller',
        query
    });
}

const usersPut = (req, res = response) => {
    const { id } = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
    });
}

const usersPost = async (req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    
    // Verificar si el email existe
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        return res.status(400).json({
            msg: 'Email already exist.'
        });
    }
    // Encriptar password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    // Save on db
    await user.save();
    
    res.json({
        msg: 'post API - controller',
        user
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch,
}