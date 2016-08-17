var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = (() => {
    var appClassSchema = new Schema ({
        materia : String,
        dia : String,
        createdIn :  { type: Date, default : Date.now()},
        done : { type : Boolean, default : false}
    });
    return  mongoose.model('appClass', appClassSchema); 
})();