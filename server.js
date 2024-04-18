//class 1

// function add(a,b){
//     return a+b;
// }

// var add= function(a,b){
//     return a+b;
// }

// var add=(a,b) => {return a+b;} // arrow function

// var add=(a,b) => a+b;
// var result= add(2,5)
// console.log(result);

// (function(){
// console.log("nisha is a good girl");
// })();

// class 2

// function callback(){
//     console.log("nisha is not going to teach students");
// }

// const add=function (a,b, callback){
//     var result=a+b;
//     console.log("result: "+ result);
//     callback();

// }
// add(3,4, callback)

// add(2,3, function(){
//     console.log('add completed');
// });

// add(2,3, ()=> console.log('add completed'))

// var fs=require('fs');
// var os=require('os');


// var user=os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile('greeting.txt', 'hi'+user.username + '!\n',()=>{console.log('file is created');
// });

// const notes=require('./notes.js')
// var _ = require('lodash');

// console.log('server page is loaded');

// var age=notes.age;

// var result=notes.addNumber(age+32,10)
// console.log(age);
// console.log("result is now "+result);

// var data=["person","person",1,2,3,2,'name', 'age,','34'];
// var filter= _.uniq(data);
// console.log(filter);
// console.log(_.isString(true));

// class 3 
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// use the routes
app.get('/', function (req, res) {
  res.send('Welcome to our Hotel');
})

//  app.get('/chicken',(req, res)=>{
//      res.send("sure sir, I would love to serve chiken");
//  })

// app.post('/items',(req,res)=>{
//     res.send('data  is saved');
// })
// app.get('/idli',(req,res)=>{
//     var customized_idli={
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_sambhar: true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
// })


// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routes
app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes );

app.listen(3000, () => {
  console.log('listening on port 3000');
})