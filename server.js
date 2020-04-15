const  express = require('express');
const app= express();
const { db,Todos} = require('./models/db')
const todoRoute = require('./routes/todos')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine","ejs");

app.use('/todo',todoRoute);
app.get('/',async(req,res)=>{
    const todos=await Todos.findAll();
     res.render('index',{todos});
 
 });
 
db.sync()
.then(() => {
    app.listen(3000)
}).catch((err) => {
    console.error(err)
})