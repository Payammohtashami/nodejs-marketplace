const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

});

module.exports = {
    PaymentModel: mongoose.model('Payment', Schema)
};