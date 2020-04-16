const express = require('express')
const path = require('path')
const { Todos,db } = require('../models/db')
const router=express.Router();
router.get('/new',(req,res) => {
     res.render('new');
 })

// router.get('/:id', (req,res) =>{
// const todo=
// })
router.post('/new',async(req,res) => {
    let task= await Todos.create({
        Title: req.body.title,
        Description: req.body.description,
        DueDate: req.body.dueDate,
        Status: req.body.status,
        Priority: req.body.priority,
        Notes: req.body.notes
    })
    await task.save();
    res.redirect('/');
     
})


module.exports=router;