import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        // required: 'First name is required.',
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        // required: 'Last name is required.',
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        
        // WHERE DID YOU GET 'validator.isEmail' AND 'message' FROM?
        // HAVE YOU TESTED IF THIS WORKS?
        validate: {
            validator: validator.isEmail
        },
        message: '{VALUE} is not an email address.'
    },
    gender: {
        type: String,
        // required: 'Gender is required',
        minlength: 1,
    },
    password: {
        type: String,
        required: 'Password is required',
        minlength: 1
    }
});


userSchema.pre('save', function(next) {
    const user = this;
    if (user.isModified('password')) {
        // WHY NOT DO BOTH AT ONCE?
        // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                // Store hash in your password DB.
        //});
        //DON'T JUST COPY AND PAST CODE; ALWAYS READ THE DOCS
        // https://github.com/kelektiv/node.bcrypt.js
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

const User = mongoose.model('User', userSchema);

export default User;

// import userData from './user-data.json';

// const fields = ['first_name', 'last_name', 'email', 'gender'];

// export default {
//     getUsers() {
//         return userData;
//     },
//     getUser(id) {
//         const user = userData.find(user => user.id === parseInt(id));
        
//         return user ? user : { error: 'No user found with that id.' };
//     },
//     create(requestBody) {

//         let missingValues = [];
//         let currentKey;

//         for (let i = 0, currentKey = fields[i]; i < fields.length; i++) {
//             if (!(currentKey in requestBody)) {
//                 missingValues.push(currentKey);
//             } 
//         } 

//         if (missingValues.length) {
//             return { 
//                 error: `Required field, ${missingValues}, not found in request body.` 
//             };
//         }


//         let lastId = userData[userData.length-1].id;
//         let newUser = Object.assign(requestBody, {id: ++lastId});
//         userData.push(requestBody);

//         return newUser;
//     },
//     editUser(paramId, requestBody) {

//         const id = parseInt(paramId);

//         if (id !== requestBody.id) {
//             return {
//                 error: `Parameter Id, ${id}, and request body id, ${requestBody.id}, must match.`
//             }
//         }
        
//         const newProps = {};
        
//         Object.keys(requestBody).forEach(prop => {
//             if (fields.includes(prop)) {
//                 newProps[prop] = requestBody[prop];
//             }
//         });

//         const selectedUser = userData.find(user => user.id === id);

//         return Object.assign(selectedUser, newProps);
//     },
//     deleteUser(paramId) {
        
//         const id = parseInt(paramId);

//         const userToDelete = userData.find(user => user.id === id);

//         if (!userToDelete) {
//             return {
//                 error: `User with the id of ${id} can't be found.`
//             }
//         }
        
//         userData.splice(userData.indexOf(userToDelete), 1);

//     }
// };

