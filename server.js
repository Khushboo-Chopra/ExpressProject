const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
const path = require('path');
const express = require('express');
const app = express();

//npm package -> view engine handle bars
app.set('view engine','hbs');

app.set('views',path.join(__dirname,'views'));

const port = 3000;


//middleware
app.use((req,res,next)=>{
const start = Date.now();
next();
const delta = Date.now() - start;
console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta} ms`);
});

//static file middleware
app.use('/site', express.static('public'));

//json parsing middleware
app.use(express.json());

app.use('/',(req,res)=>{
    res.render('index',{
        title:'My friends are very clever',
        caption: 'Let\'s go skiing!'
    });
});

//middleware for routes
app.use('/friends',friendsRouter);

//mount the router on /messages path
app.use('/messages',messagesRouter);

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});