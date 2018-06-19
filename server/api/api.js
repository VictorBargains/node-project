
import user from './user/userRoutes.js';

export default app => {
  app.use('/api/user', user);
};
