const router = require("express").Router();
const Comment = require("../models/Comment.model");
const Post = require("../models/Post.model");

//GET all comments --->Model.find()
router.get("/comments", async (req, res) => {
    try{
        const comments = await Comment.find()
        res.json(comments);
    }
    catch(err){
        console.log(err);
    }
});

//POST .. new comment 
router.post("/comments", async (req, res) =>{
    try{
        const newComment = await Comment.create(req.body);
        //link comment with post
        const { _id, post } = newComment;
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: { comments: _id },
        });
        console.log(updatedPost);
        res.json(newComment);
    }
    catch(err){
        console.log(err);
    };
});

module.exports = router;