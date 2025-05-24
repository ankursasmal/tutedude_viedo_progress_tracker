require('dotenv').config();
const express=require('express');
let app=express();
let cors=require('cors')
const PORT=process.env.PORT || 4000;
 let route=require('./route/rout')
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());
 
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
      //credentials use for delete and post requise and put (only for profile get req use) in frontend
  credentials: true
}));

app.use('/',route);

 app.listen(PORT,()=>{
    console.log('daat come');
})