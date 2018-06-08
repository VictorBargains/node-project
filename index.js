import express from 'express';
import userData from './server/models/user-data.json';

import appMiddleware from './server/appMiddleware';
import userRouter from './server/routes/userRouter';

import api from './server/api/api';

const PORT = process.env.PORT || 3000;
const app = express();


// starts middleware
appMiddleware(app, express);

api(app);

//app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({error: err});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// create server folder with sub directories - look up api design architecture
// look at 4 examples
// node api design folder structure
// create error handler middleware - look up express documentation
// put and delete endpoint

