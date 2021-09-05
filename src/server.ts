import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import {Request, Response} from 'express';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req:Request, res:Response) => {
    res.send("Página não encontrada - ERRO 404");
});

server.listen(process.env.PORT, () => {console.log(`servidor iniciado na porta ${process.env.PORT} em ${new Date()}`)});