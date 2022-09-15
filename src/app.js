import express from 'express';
import cors from 'cors';
import { cliente } from "./components";
import { producto } from "./components";
import { welcome } from "./components";


export const app= express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", welcome);
app.use("/clientes", cliente);
app.use("/productos", producto);