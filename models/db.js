const Sequelize = require('sequelize')


const db = new Sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/store.db'
})
const Todos = db.define('todo',{
    id:{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Title:{
        type : Sequelize.STRING(20),
        allowNull : false
    },
    Description:{
        type : Sequelize.STRING(70),
        allowNull : true
    },
    DueDate:{
        type : Sequelize.DATE,
        allowNull : false
    },
    Status:{
        type : Sequelize.STRING(10),
        allowNull : false,
        defaultValue : "Incomplete"
        
    },
    Priority:{
        type : Sequelize.STRING(10),
        allowNull : false,
        defaultValue : "Incomplete"
        
    },
    Notes:{
        type : Sequelize.STRING(30),
        allowNull : true
    }
})
//db.sync()
//.then(()=> {
//    console.log('db works')
//})
//.catch((err) => {
//    console.log(err)
//})



//async function task() 
//{
//    await db.sync()
//}
//task();
module.exports={db,Todos};
//exports.db=db;
//exports.Todos=Todos;
