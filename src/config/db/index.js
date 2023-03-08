const mongoose = require('mongoose');
async function connect(){

    try {
        await mongoose.connect('mongodb+srv://tuanlmgch200821:123@demo.lhc9pdj.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect Failed');
    }

}
module.exports = {connect};
