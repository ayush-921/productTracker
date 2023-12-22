require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DB_URL

mongoose.set("strictQuery", false);
mongoose.connect(mongoString);

const app = express()
const PORT = process.env.PORT || 3000

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


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

