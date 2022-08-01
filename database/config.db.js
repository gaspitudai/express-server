const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, // not supported
            // useFindAndModify: false, // not supported
        });

        console.log('Online DB :)');

    } catch (error) {
        console.log(error);
        throw new Error('Error to try init da databaseee')
    }

}

module.exports = {
    dbConnection
}