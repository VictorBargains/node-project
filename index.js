import express from 'express';
import userData from './user-data.json';

import appMiddleware from './appMiddleware';
import userRouter from './userRouter';

const PORT = process.env.PORT || 3000;
const app = express();


// starts middleware
appMiddleware(app, express);


app.use('/api/user', userRouter);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// get users by id /api/user/:id
// post endpoint add user to user-data.json don't ask id
// put
// delete
// ajax call to endpoint

