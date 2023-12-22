require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000


const {serviceroute} = require('./routes');

app.use('/api', serviceroute)

app.get('/', (req, res) => {
    res.send("Server Started Sucessfully")
})

const start = async ()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Server Started Sucessfully at ${PORT}`)
        })
    } catch (error) {
        console.log(error)        
    }
}

start();

