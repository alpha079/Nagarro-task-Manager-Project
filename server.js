const  express = require('express');
const app= express();
const { db,Todos} = require('./models/db')
const todoRoute = require('./routes/todos')
const methodOverride = require('method-override') 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine","ejs");


app.use(methodOverride('_method'));
app.get('/',async(req,res)=>{
    const todos=await Todos.findAll();
     res.render('index',{todos});
 
 });
 
 app.get('/:id', async (req, res) => {
    const todo = await Todos.findByPk(req.params.id)
    res.render('todo', { todo })
})

app.patch('/:id', async(req, res) => {
    let todo = await Todos.findByPk(req.params.id)
        todo.Title = req.body.title
        todo.Description= req.body.description
        todo.DueDate = req.body.dueDate
        todo.Priority = req.body.priority
        todo.Status = req.body.status
     await todo.save();
     res.redirect('/')
})

db.sync()
.then(() => {
    app.listen(3000)
}).catch((err) => {
    console.error(err)
})

app.use('/todo',todoRoute);