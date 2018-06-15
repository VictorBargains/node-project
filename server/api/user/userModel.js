import userData from './user-data.json';

const fields = ['first_name', 'last_name', 'email', 'gender'];

export default {
    getUsers() {
        return userData;
    },
    getUser(id) {
        const user = userData.find(user => user.id === parseInt(id));
        
        return user ? user : { error: 'No user found with that id.' };
    },
    create(requestBody) {

        let missingValues = [];
        let currentKey;

        for (let i = 0, currentKey = fields[i]; i < fields.length; i++) {
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
    },
    editUser(paramId, requestBody) {

        const id = parseInt(paramId);

        if (id !== requestBody.id) {
            return {
                error: `Parameter Id, ${id}, and request body id, ${requestBody.id}, must match.`
            }
        }
        
        const newProps = {};
        
        Object.keys(requestBody).forEach(prop => {
            if (fields.includes(prop)) {
                newProps[prop] = requestBody[prop];
            }
        });

        const selectedUser = userData.find(user => user.id === id);

        return Object.assign(selectedUser, newProps);
    },
    deleteUser(paramId) {
        
        const id = parseInt(paramId);

        const userToDelete = userData.find(user => user.id === id);

        if (!userToDelete) {
            return {
                error: `User with the id of ${id} can't be found.`
            }
        }
        
        userData.splice(userData.indexOf(userToDelete), 1);

    }
};

// {
//     "id": 10,
//     "first_name": "Alexine",
//     "last_name": "Gillopp",
//     "email": "agillopp9@reference.com",
//     "gender": "Female"
// // }

// {
// 	"id": 10,
// 	"email": "jeff.mignone@gmail.com",
// 	"last_name": "Silversteen",
// 	"gender": "Male"
// }