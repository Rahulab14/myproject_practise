const express = require('express')
const app = express();

const PORT=3000;


app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
})

app.post('/login',(req,res)=>{
    const {username,password}=req.body
    if(!username){
        return res.status(400).send({message:'username is required'})
    }
    if(!password){
        return res.status(400).send({message:'password is required'})
    }
    if(password.length<8||password.length>40){
        return res.status(400).json({message:'Password is between 8 to 40 character'})
    }
    return res.status(200).json({message:'Login successful'})
})


app.listen(PORT,()=>{
    console.log('server is listening at port ')
})