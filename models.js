import userData from './user-data.json';

const Users = {
    getAllUsers: () => {
        return userData;
    },
    getUser: (paramsId) => {
    
        const user = userData.find(user => user.id === parseInt(paramsId));
        
        if (user) {
            return user;
        } else {
            return { error: 'No user found with that id.' };
        }
    
    },
    create: (requestBody) => {

        const requiredKeys = ["first_name", "last_name", "email", "gender"];

        for (let i = 0; i < requiredKeys.length; i++) {
            let currentKey = requiredKeys[i];
                    
            if (!(currentKey in requestBody)) {
                return { error: `Required field, ${currentKey}, not found in request body.` }
            } 
        } 
        const {first_name, last_name, email, gender} = requestBody;

        let newUser = {
            first_name,
            last_name,
            email,
            gender
        }
        // There is no edge case code for when there are no users in userData.
        let lastId = userData[userData.length-1].id;

        newUser = Object.assign(newUser, {id: ++lastId});
        userData.push(newUser);

        return newUser;
    }
}

module.exports = Users;