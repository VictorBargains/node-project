import Recipe from './recipeModel';
import { validateFields, errorHandler, checkIdsMatch, checkIfEmpty } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
  getRecipes(req, res, next) {  
    Recipe.find()
		.then(recipes => {
      	  if (!recipes.length) {
            	return errorHandler({
              		message: 'No resource found',
              		status: 404
            }, ApiException, next);
      	}
	    
      	res.json(recipes);
    })
    .catch(err => {
      		// DID YOU CHECK WHAT THIS ERROR LOOKS LIKE?
      		return errorHandler(err, ApiException, next);
    });
  },
  getRecipe(req, res, next) {
    Recipe.findById(req.params.id)
		.then(recipe => {

				if (!recipe) {
						return errorHandler({
							message: 'No resource found',
							status: 404
						}, ApiException, next);
				}

      	  res.json(recipe);
    	})
    	.catch(err => {
      return errorHandler(err, ApiException, next);
    });
  },
  createRecipe(req, res, next) {
      
      const newRecipe = new Recipe(req.body);

      newRecipe.save(req.body)
      .then(recipe => {
	      	// WHAT IF THERE IS NONE?
        	res.json(recipe);
      })
      .catch(err => {
        	return errorHandler(err, ApiException, next);
      })

  },
  updateRecipe(req, res, next) {

		checkIdsMatch(req, res, next);

		checkIfEmpty(req, res, next);

		Recipe.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true })
		.then(updatedRecipe => {

				if (!updatedRecipe) {
					return errorHandler({
						message: 'No resource found',
						status: 404
					}, ApiException, next);
				}

				res.json(updatedRecipe);
		})
		.catch(err => {
			return errorHandler(err, ApiException, next);
		});
  },
  deleteRecipe(req, res, next) {
		Recipe.findByIdAndRemove(req.params.id)
		.then(deletedRecipe => {

			if (!deletedRecipe) {
				return errorHandler({
					message: 'No resource found',
					status: 404
				}, ApiException, next);
			}

			res.json(deletedRecipe);
		})
		.catch(err => {
			return errorHandler(err, ApiException, next);
		}); 
  }
};

