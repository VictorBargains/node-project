import Recipe from './recipeModel';
import { validateFields, errorHandler, checkIdsMatch, checkIfEmpty } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
  getRecipes(req, res, next) {  
    Recipe.find()
		.then(recipes => {
      	  if (!recipes.length) {
            	return errorHandler({
              		message: 'No recipes found.',
              		status: 404
            }, next);
      	}
	    
      	res.json(recipes);
    })
    .catch(err => {
      		// DID YOU CHECK WHAT THIS ERROR LOOKS LIKE?
      		return errorHandler(err, next);
    });
  },
  getRecipe(req, res, next) {
    Recipe.findById(req.params.id)
		.then(recipe => {

				if (!recipe) {
						return errorHandler({
							message: 'No recipe found.',
							status: 404
						}, next);
				}

      	  res.json(recipe);
    	})
    	.catch(err => {
      return errorHandler(err, next);
    });
  },
  createRecipe(req, res, next) {

			const newRecipe = new Recipe(req.body);

      newRecipe.save(req.body)
      .then(recipe => {
					// WHAT IF THERE IS NONE?
					// find user on user model by _id (req.user?) and push recipe to recipes array.
        	res.json(recipe);
      })
      .catch(err => {
        	return errorHandler(err, next);
      })

  },
  updateRecipe(req, res, next) {

		Recipe.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true })
		.then(updatedRecipe => {

				if (!updatedRecipe) {
					return errorHandler({
						message: 'No recipe found to update.',
						status: 404
					}, next);
				}

				res.json(updatedRecipe);
		})
		.catch(err => {
			return errorHandler(err, next);
		});
  },
  deleteRecipe(req, res, next) {
		Recipe.findByIdAndRemove(req.params.id)
		.then(deletedRecipe => {

			if (!deletedRecipe) {
				return errorHandler({
					message: 'No recipe found to delete.',
					status: 404
				}, next);
			}

			res.json(deletedRecipe);
		})
		.catch(err => {
			return errorHandler(err, next);
		}); 
  }
};

