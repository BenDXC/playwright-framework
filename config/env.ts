import dotenv from 'dotenv';

dotenv.config();


export const ENV = {
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  apiURL: process.env.API_URL || 'https://api.example.com',
  username: process.env.USER || 'testuser',
  password: process.env.PASS || 'password',
};