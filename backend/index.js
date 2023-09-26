const express = require("express");

const menu = require("./menu");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello")
})

app.get("/menu",(req,res)=> {
    res.send(menu);
})

app.get('/menu/:menuId',(req,res) => {
    const menuId = parseInt(req.params.menuId);
    const menuItem = menu.find(item => item.id === menuId);

    if(!menuItem){
        return res.status(404).json({error: "Menu item not found"});
    }
    res.json(menuItem);
})

const port = process.env.PORT || 5000;

app.listen(5000,function(){
    console.log(`Server is running ${port}`);
})