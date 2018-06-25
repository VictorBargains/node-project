import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: 'A title is required.',
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    ingredients: {
        type: [String],
        required: 'Ingredients are required.',
        minlength: 1,
        trim: true
    },
    directions: {
        type: [String],
        required: 'Directions are required',
        minlength: 1,
        trim: true,
    },
    creator: {
        type: String,
        required: 'Creator is required'
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;