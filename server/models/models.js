import userData from './user-data.json';


var name = 'Jeff'

export default {
    getUsers() {
        return userData;
    },
    getUser(id) {
        const user = userData.find(user => user.id === parseInt(id));
        
        return user ? user : { error: 'No user found with that id.' };
    },
    create(requestBody) {
        const requiredKeys = ["first_name", "last_name", "email", "gender"];
        let missingValues = [];
        let currentKey;

        for (let i = 0, currentKey = requiredKeys[i]; i < requiredKeys.length; i++) {
            if (!(currentKey in requestBody)) {
                missingValues.push(currentKey);
            } 
        } 

        if (missingValues.length) {
            return { 
                error: `Required field, ${missingValues}, not found in request body.` 
            };
        }


        let lastId = userData[userData.length-1].id;
        let newUser = Object.assign(requestBody, {id: ++lastId});
        userData.push(requestBody);

        return newUser;
    }
};