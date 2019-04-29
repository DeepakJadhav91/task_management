var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require("body-parser");
var fs = require('fs');
// var users = require('db.json')
// const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://chitra:<vine@2016>@cluster0-aazdv.mongodb.net/Products?retryWrites=true";
// // const client = new MongoClient(uri, { useNewUrlParser: true });
// // client.connect(err => {
// //   const collection = client.db("test").collection("books");
// //   // perform actions on the collection object
// //   client.close();
// // });
// var mongoose = require('mongodb');
// mongoose.connect('mongodb+srv://chitra:<Ye$1T159S>@cluster0-aazdv.mongodb.net/Products?retryWrites=true', { useNewUrlParser: true })
//   .then(() =>  console.log('connection successful'))
//   .catch((err) => console.error(err));
  
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://chitra:<Ye$1T159S>@cluster0-aazdv.mongodb.net/Products?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("Products").collection("Product");
//   // perform actions on the collection object
//   client.close();
// });

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect("mongodb+srv://chitra:<Ye$1T159S>@cluster0-aazdv.mongodb.net/Products?retryWrites=true", {useNewUrlParser: true} function(err, db) {
//     console.log(err);
// });

// MongoClient.connect('mongodb+srv://chitra:<Ye$1T159S>@cluster0-aazdv.mongodb.net/Products?retryWrites=true', { useNewUrlParser: true })
//   .then(() =>  console.log('connection successful'))
//   .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get('/', function (req, res) {
   res.send('Hello World');
    console.log("test");
})

var server=app.listen(3000,function() {});

app.post('/register', function(request, response) {
    console.log(request.body);
    const userid = Math.random(99999);
    // DB operations
    response.status(200).send({
        success: true,
        status: 200,
        user: 'sample demo',
        message: 'User created succssfully',
        userid: userid
    });
});

app.get('/registerGet/:username/:phone', function(req, res) {
    console.log(req.params);
    var data = {
        "register": {
            "username": req.params.username,
            "phone": req.params.phone
        }
    }; 

    res.status(200).send(data);
});

app.post('/addUser', function(request, response) {
    console.log(request.body);
    var body=JSON.stringify(request.body)
    // const userid = Math.random(99999);
    // DB operations
    var obj = {
        users: []
     };
     fs.readFile('db.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj.users.push(request.body); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('db.json', json, 'utf8', function writeCallBack(err, data){
                console.log(data);
            }); // write it back 
        }
    });
 

    response.status(200).send({
        success: true,
        status: 200,
        message: 'Task created succssfully'
    });
});

app.get('/tasks', function(req, res) {
    let rawdata = fs.readFileSync('task.json');  
    let taskData = JSON.parse(rawdata);  
    console.log(taskData.tasks);  

    res.status(200).send(taskData.tasks);
});

app.post('/addTask', function(request, response) {
    console.log(request.body);
    var body=JSON.stringify(request.body)
    var obj = {
        tasks: []
     };
     fs.readFile('task.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj.tasks.push(request.body); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('task.json', json, 'utf8', function writeCallBack(err, data){
               if(err) {

               } else {

               }
            }); // write it back 
        }
    });
 

    response.status(200).send({
        success: true,
        status: 200,
        user: 'sample demo',
        message: 'User created succssfully'
    });
});

app.post('/updateTask', function(request, response) {
    console.log(request.body);
    var body=JSON.stringify(request.body)
    var obj = {
        tasks: []
     };
     fs.readFile('task.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj.tasks.push(request.body); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('task.json', json, 'utf8', function writeCallBack(err, data){
               if(err) {

               } else {

               }
            }); // write it back 
        }
    });
 

    response.status(200).send({
        success: true,
        status: 200,
        message: 'Task Updated succssfully'
    });
});
