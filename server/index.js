import express from 'express';
import userData from './api/user/user-data.json';

import appMiddleware from './appMiddleware';
import errorMiddleware from './errorMiddleware';

import userRouter from './api/user/userRoutes';
import PORT from '../config';

const app = express();

// starts middleware
appMiddleware(app, express);

app.use('/api/user', userRouter);

errorMiddleware(app);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// create server folder with sub directories - look up api design architecture
// look at 4 examples
// node api design folder structure
// create error handler middleware - look up express documentation
// put and delete endpoint

