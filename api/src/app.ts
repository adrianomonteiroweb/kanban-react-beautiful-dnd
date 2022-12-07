import express from 'express';

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
