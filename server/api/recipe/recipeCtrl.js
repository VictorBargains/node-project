import Recipe from './recipeModel';
import User from '../user/userModel';
import { validateFields, errorHandler, checkIdsMatch, checkIfEmpty } from '../apiHelpers';
import { ApiException } from '../../errorHandlers/exceptions';

export default {
  getRecipes(req, res, next) {  
		Recipe
		.find()
		.then(recipes => {
      	if (!recipes.length) {
            return errorHandler({
              		message: 'No recipes found.',
              		status: 404
            }, next);
		}
				// res.render('/recipes', { recipes })
				// loop over recipe._id and add a view btn linking to /recipe/:id

      	res.json(recipes);
    })
    .catch(err => {
      		return errorHandler(err, next);
    });
  },
  getRecipe(req, res, next) {

		Recipe
		.findById(req.params.id)
		.then(recipe => {

				if (!recipe) {
						return errorHandler({
							message: 'No recipe found.',
							status: 404
						}, next);
				}

				// checkIfCreator(req.user._id, recipe);
				
					// res.render('recipe', { recipe, isCreator: isCreator(req.user._id) }) 
					// if CheckIfCreator is true, show edit and delete btns on recipe page
      	  res.json(recipe);
    	})
    	.catch(err => {
      return errorHandler(err, next);
    });
  },
  createRecipe(req, res, next) {

			req.user = { id: '5b2e72ee852256686c1cb92e' };
			req.body.creator = req.user.id;

			const newRecipe = new Recipe(req.body);
			newRecipe
			.save()
				.then(recipe => {
					if (!recipe) {
							return errorHandler({
								message: 'Recipe couldn\'t be saved.',
								status: 404
							}, next);
					}
					// find user on user model by _id (req.user?) and push recipe to recipes array.
					User
					.findOneAndUpdate({ _id: req.user.id }, { $push: { recipes: recipe._id } }, {  new: true })
					.then(user => {
						res.json(user);
					// res.redirect('/recipe/:id');
					})
					.catch(err => {
						return errorHandler(err, next);
				});
		  })
		  .catch(err => {
			  	console.log(err);
		    	return errorHandler(err, next);
		  })

  },
  updateRecipe(req, res, next) {

		Recipe
		.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true })
		.then(updatedRecipe => {
			
				if (!updatedRecipe) {
					return errorHandler({
						message: 'No recipe found to update.',
						status: 404
					}, next);
				}
				// res.redirect('/recipe/:id')
				res.json(updatedRecipe);
		})
		.catch(err => {
			return errorHandler(err, next);
		});
  },
  deleteRecipe(req, res, next) {
		Recipe
		.findByIdAndRemove(req.params.id)
		.then(deletedRecipe => {

			if (!deletedRecipe) {
				return errorHandler({
					message: 'No recipe found to delete.',
					status: 404
				}, next);
			}
			// res.redirect('/recipes');
			res.json(deletedRecipe);
		})
		.catch(err => {
			return errorHandler(err, next);
		}); 
  }
};

