import express from 'express';
import recipeCtrl from './recipeCtrl';

const router = express.Router();


router.route('/')
  .get(recipeCtrl.getRecipes)
  .post(recipeCtrl.createRecipe);


router.route('/:id') 
  .get(recipeCtrl.getRecipe) 
  .put(recipeCtrl.updateRecipe) 
  .delete(recipeCtrl.deleteRecipe);


  export default router;