const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB  = require('./config/database');

const app = express();

connectDB()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json({message : "Test OK"});
})


app.listen(process.env.NODE_PORT, () => {
    console.log(`Serveur lancé à l'adresse : http://localhost:${process.env.NODE_PORT}`);
});