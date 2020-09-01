import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

const app = express();

// Conexão Mongo DB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Helena:He27le08na95*@bootcamp.edupv.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no Mongo DB com sucesso');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB' + error);
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API Iniciada'));
