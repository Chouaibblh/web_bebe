const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const collection = require('./config');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static("public"));
app.set('view engine','ejs');
app.get('/index',(req,res) =>{
    res.render("index");
});
app.get('/',(req,res) =>{
    console.log("Home Page");
});
app.post('/index', async (req, res) => {
    data = {
        quantity : req.body.quantity,
        name : req.body.fullname,
        phone : req.body.phone,
        city : req.body.city
    }
    const userdata = await collection.insertMany(data);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});