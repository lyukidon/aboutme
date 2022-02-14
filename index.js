const express=require('express');
const path=require('path')
const bodyParser=require('body-parser')
const aboutRouter=require('./routes/about')
const app=express();

app.set('port',process.env.PORT||3000)
app.set('view engine', 'ejs')

app.use(express.json());
app.use(bodyParser.json());
app.use('/', aboutRouter);
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),()=>{
    console.log( app.get('port') + ' 에서 동작 중');
})