const mongoose = require('mongoose');

const medecinShema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    specialite:{
        type: String,
        required: true
    }
})