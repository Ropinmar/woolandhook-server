const { default: mongoose } = require("mongoose");

function ValidId(req, res, next){
    console.log("Validanndo id");
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }
    next();
};

module.exports = ValidId;