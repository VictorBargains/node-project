import user from './user/userRoutes.js';
import recipe from './recipe/recipeRoutes.js';


export default app => {
  app.use('/api/user', user);
  app.use('/api/recipe', recipe);
};
