import express from 'express';

const app = express();
app.use(express.json());

const users = [
    'Lucas',
    'Diego',
    'Rodrigo',
    'Daniel'
];

//Query param example
app.get('/users', (request, response) => {

    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

// Request param example
app.get('/users/:id', (request, response) => {

    const id = Number(request.params.id);

    return response.json(users[id]);
});

// Request Body example
app.post('/users', (request, response) => {
    
    const data = request.body;

    return response.json(data);
});
