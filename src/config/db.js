//Requiero moongose para trabajar con mongoDB. Se necesita llamar a la conexión e introducirle la URL de conexión.
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL);