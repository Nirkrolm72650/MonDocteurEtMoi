const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json({message : "Test OK"});
})


app.listen(4444, () => {
    console.log(`Serveur lancé à l'adresse : http://localhost:4444`);
});