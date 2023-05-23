const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    antecedant:{
        type: [String]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Patient", patientSchema);