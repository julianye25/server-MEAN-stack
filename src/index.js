// Conexion base de datos
// ==========================================
require('./database');

const app = require("./app");

app.listen(app.get('port'), () => {
    console.log('server on port: http://localhost:3000');
});