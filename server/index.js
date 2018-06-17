import express from 'express';
import mongoose from 'mongoose';

import appMiddleware from './middleware/appMiddleware';
import errorMiddleware from './middleware/errorMiddleware';

import config from './config/config';
import api from './api/api';

const app = express();

mongoose.Promise = global.Promise;

// starts middleware
appMiddleware(app, express);

api(app);

errorMiddleware(app);

let server;

function runServer(databaseUrl, port = config.PORT) {
    
      return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
          if (err) {
            return reject(err);
          }
          server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve();
          })
            .on('error', err => {
              mongoose.disconnect();
              reject(err);
            });
        });
      });
    }

    function closeServer() {
      return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
          console.log('Closing server');
          server.close(err => {
            if (err) {
              return reject(err);
            }
            resolve();
          });
        });
      });
    }
    
    if (require.main === module) {
      runServer(config.DATABASE_URL).catch(err => console.error(err));
    }