import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail
        },
        message: '{VALUE} is not an email address.'
    },
    gender: {
        type: String,
        minlength: 1,
    },
    password: {
        type: String,
        required: 'Password is required',
        minlength: 1
    }
});

const User = mongoose.model('User', userSchema);

// userSchema.post('save', (err, user, next) => {

// });


export default User;

// userSchema.pre('save', function(next) {
//     const user = this;
//     if (user.isModified('password')) {
//         // WHY NOT DO BOTH AT ONCE?
//         // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//                 // Store hash in your password DB.
//         //});
//         //DON'T JUST COPY AND PAST CODE; ALWAYS READ THE DOCS
//         // https://github.com/kelektiv/node.bcrypt.js
//         bcrypt.genSalt(10, function(err, salt) {
//             bcrypt.hash(user.password, salt, function(err, hash) {
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         next();
//     }
// });
