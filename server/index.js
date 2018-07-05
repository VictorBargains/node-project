import express from 'express';
import mongoose from 'mongoose';

import appMiddleware from './middleware/appMiddleware';
import errorMiddleware from './middleware/errorMiddleware';

import config from './config/config';
import api from './api/api';

import session from 'express-session';
import passport from 'passport';

const app = express();

// starts middleware
appMiddleware(app, express, passport, session);

api(app);

errorMiddleware(app);

mongoose.connect(config.DATABASE_URL)
.then(
  () => console.log('Mongoose connected to MongoDB Database'),
  err => console.log('Mongoose connection error', err)
)

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});

