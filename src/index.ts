import { config as envConfig } from 'dotenv';
import { server } from './server';

const { PORT = '3030' } = process.env;

envConfig();
server(PORT);
