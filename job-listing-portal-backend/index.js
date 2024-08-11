const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const UserModel = require('./server/models/User')

const app= express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/job-portal')

app.post('/register',(req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req,res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.listen(3200,()=>{
    console.log("server is running on port 3200")
})