const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

module.exports =  async function connectDB () {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MONGODB', err));
}
