const mongoose = require ("mongoose");
const postSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref:"user",
    },
    title : {
        type: String,
        required:true,
    },
    desc:{ 
        type: String,
        required: true,
    },
    img : {
        type: String,
        required: true,
    },
});

module.exports =mongoose.model("post",postSchema);