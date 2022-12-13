//router
const router = require("express").Router();
const Event = require("../models/Event.model");
const User = require("../models/User.model")
const mongoose = require("mongoose");
const ValidId = require("../middleware/ValidId");


//Routes------------------------------
//Create a event - POST
router.post("/events", async (req, res) => {
    try{
        //data comming in req.body
        console.log(req.body);
        //Model.create
        const newEvent = await Event.create(req.body);
        //link it to the user
        const { _id, author } = newEvent;
        const updatedUser = await User.findByIdAndUpdate(author, {
            $push: { events: _id ,}
        });

        res.json(newEvent);
    }
    catch(err){
        console.log(err)
    }
});


//Read - GET - all events
router.get("/events", async (req, res) => {
    try{
        //Model.find
        const events = await Event.find();
        res.json(events);
    }
    catch(err){
        console.log(err)
    }
    
});


//Read - GET - Details event by id
router.get("/events/:id", ValidId, async (req, res) => {
    const { id } = req.params;
    try{
    //Model.findById(id)
    const eventDetails = await Event.findById(id);
    res.json(eventDetails)
    }
    catch(err){
        console.log(err)
    }
});



//Updated - PUT - update a event by id
router.put("/events/:id", ValidId, async (req, res) => {
    try{
        const { id } = req.params;
        //Model.findByIdAndUpdate(id, newDate, {new: true})
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedEvent)
    }
    catch(err){
        console.log(err)
    }
});


//Delete - DELETE
router.delete("/events/:id", ValidId, (req, res) => {
    const { id } = req.params;
    //Model.findByIdAnDelete(id)
    Event.findByIdAndDelete(id)
    .then((deleteEvent) => {
        res.json(deleteEvent)
    })
    .catch(console.log)
    
});

module.exports = router;