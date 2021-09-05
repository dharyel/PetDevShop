import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import {Request, Response} from 'express';
import { appendFile } from 'fs';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.get("/", (req:Request, res:Response) => {
    res.send("Hello World");
})

server.listen(process.env.PORT, () => {console.log(`servidor iniciado na porta ${process.env.PORT} em ${new Date()}`)});