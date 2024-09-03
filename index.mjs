// index.mjs

// Cargar variables de entorno desde el archivo .env
import dotenv from 'dotenv';
dotenv.config();

import esprimo from './primo.js';

// Usa la variable de entorno
const number = parseInt(process.env.NUMBER, 10);
console.log(`¿El número ${number} es primo? ${esprimo(number)}`);
