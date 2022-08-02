const { Schema, model } = require('mongoose');

const RoleSchema = Schema({

    role: {
        type: String,
        required: [true, 'Role is requires']
    }

});

module.exports = model('Role', RoleSchema);