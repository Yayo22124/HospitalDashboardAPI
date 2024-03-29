const express = require('express');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');
const sequelize = require('./config/db');
const datosPacientes = require('./dao/getDatosPacientes');
const pacientesPorGenero = require('./dao/getPacientesPorGenero');
const pacientesRouter = require('./routes/pacientes.routes');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});

app.use('/', pacientesRouter);

server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
    io.on('connection', async(socket) => {
      console.log('User connected via socket.io');
      socket.on('disconnect', () => {
        console.log('User disconnected via socket.io');
      });

      await this.emitirDatosActualizados()
    });

    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})

// Función para emitir eventos personalizados
exports.emitirDatosActualizados = async () => {
  try {
    const datos = await datosPacientes.obtenerDatosDesdeVista();
    const pacientesGenero = await pacientesPorGenero.getPacientesPorGenero(); 

    io.emit('datos', datos);
    io.emit('pacientesPorGenero', pacientesGenero)
    console.log('Datos actualizados emitidos');
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

module.exports = { io };
