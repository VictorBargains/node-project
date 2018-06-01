import express from 'express';
import morgan from 'morgan';
import userData from './user-data.json';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/api/user', (req, res) => {  
    res.json(userData);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// get users by id /api/user/:id
// post endpoint add user to user-data.json don't ask id
// put
// delete
// ajax call to endpoint

