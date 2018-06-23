import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    description: {
        type: [String],
        trim: true
    },
    ingredients: {
        type: [String],
        required: true,
        minlength: 1,
        trim: true
    },
    directions: {
        type: [String],
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;