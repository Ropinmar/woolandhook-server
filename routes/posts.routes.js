//http://localhost:5005/api/posts

const router = require("express").Router();

const Post = require("../models/Post.model");
const ValidId = require("../middleware/ValidId")
//Create - post: create new post
router.post("/posts", (req, res, next) => {
    // console.log(req.body);
    Post.create(req.body)
    .then((createdPost) => {
        res.json(createdPost);
    })
    .catch((err) => console.log(err));
    
});

//Read - get : all posts ---> Get: Model.find()
router.get("/posts", async (req, res, next) => {
    try{
        const posts = await Post.find()
        res.json(posts);
    }
    catch(err){
        console.log(err)
    }
    
});

//Read - get : post´s details by Id ---> Get: Model.findById()
router.get("/posts/:id", ValidId, async (req, res, next) => {
    try{
        const { id } = req.params;
        const postDetails = await Post.findById(id);
        res.json(postDetails);
    }
    catch(err){
        console.log(err)
    }
    
});

//Update - put: edit post ---> Put: Model.findByIdAndUpdate()
router.put("/posts/:id", ValidId, async (req, res, next) => {
    try{
        const { id } = req.params;
        
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updatedPost);
    }
    catch(err){
        console.log(err);
    }
    
});

//Delete: ---> Model.findByIdAndDelete()
router.delete("/posts/:id", ValidId, (req, res, next) => {

    const { id } = req.params;

    Post.findByIdAndDelete(id)
    .then((deletedPost) => {
        res.json(deletedPost);
    })
    .catch(console.log);
    
});

module.exports = router;