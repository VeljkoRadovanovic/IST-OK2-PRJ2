const mongoose = require('mongoose')

const bazaUrl = 'mongodb+srv://NewUser:lolpvp02@veljkonrt14821.et8nq.mongodb.net/baza_automobila?retryWrites=true&w=majority&appName=veljkonrt14821'

module.exports= () =>  mongoose.connect(bazaUrl);