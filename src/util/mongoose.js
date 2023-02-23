//convert objects from db
module.exports = {
    convertToArrayObjects: function(mongoosesArrays){
        return mongoosesArrays.map(mongoose => mongoose.toObject());
    },
    convertToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}