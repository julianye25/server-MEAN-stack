// requite
// ==========================================
const express = require ('express');
const morgan = require ('morgan');


// inicializar
// ==========================================""
const app = express();



// enviroment variables
// ==========================================
app.set('port', process.env.PORT || 3000);

// midlewares
// ==========================================
app.use(morgan('dev'));

// rutas
// ==========================================
app.use("/api/employess", require('./routes/employees.routes'));

module.exports = app;