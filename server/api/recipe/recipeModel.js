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
        default: undefined,
        required: 'Ingredients are required.',
        trim: true
    },
    directions: {
        type: [String],
        default: undefined,
        required: 'Directions are required.',
        trim: true
    },
    creator: {
        type: String,
        required: 'Creator is required'
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;