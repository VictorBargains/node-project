import user from './user/userRoutes.js';
import recipe from './recipe/recipeRoutes.js';
import auth from './auth/authRoutes';
import strategies from './auth/strategies';

export default app => {
  app.use('/api/user', user);
  app.use('/api/recipe', recipe);
  app.use('/auth', auth);
};
