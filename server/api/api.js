
import user from './user/userRoutes.js';
// import animal from './user/animalRoutes.js';

export default app => {
  app.use('/api/user', user);
  // app.use('/api/animal', animal);
};
