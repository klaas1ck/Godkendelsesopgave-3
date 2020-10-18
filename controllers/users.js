//Fik denne kode fra npm uuit siden
import { v4 as uuidv4 } from 'uuid';

import { user1, user2 } from "../model/user.js";
// Så vi kan lave nye users og let fordi så usersne kan ændres.
let users = [];

users.push({ ... user1, id: uuidv4() });
users.push({ ... user2, id: uuidv4() });

//Så vi kan modtage alle users
export const getUsers =  (req, res) => {
    res.send(users);
}
// Så vi kan lave en ny User
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ... user, id: uuidv4() });
    
    res.send(`User with the username ${user.firstName} added to the database!`);
}
// Så vi kan finde en user
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)
    
    res.send(foundUser);
}
// Så vi kan slette en user
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} deleted from the database.`)
}
// Så vi kan 
export const updateUser = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(`User with the id ${id} has been updated`);
};


