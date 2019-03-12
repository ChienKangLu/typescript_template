"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
let router = express.Router();
let id = 0;
let users = {};
//Create a user
router.post('/', (req, res, next) => {
    id++;
    let user = req.body; //data
    users[id] = user;
    console.log("Create user", id, user);
    res.status(201).json({
        "id": id
    });
});
//Read a user
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    let user = users[id];
    if (user == null) {
        console.log('User not exit', id);
        res.writeHead(404); //404:Not Found
        res.end('\n');
        return;
    }
    console.log('Read user', id, user);
    res.status(200).json({
        "id": id
    });
});
//Delete a user
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    let user = users[id];
    if (user == null) {
        console.log('User not exit', id);
        res.writeHead(404); //404:Not Found
        res.end('\n');
        return;
    }
    delete users[id];
    console.log('Delete user', id, user);
    res.status(204).json({
        "id": id
    });
});
//Read all user
router.get('/', (req, res, next) => {
    console.log('Read all user', users);
    res.status(200).json(users); //200:OK
});
//Update a user
router.patch('/:id', (req, res, next) => {
    let id = req.params.id;
    let newUser = req.body; //data
    let user = users[id];
    if (user == null) {
        console.log('User not exit', id);
        res.writeHead(404); //404:Not Found
        res.end('\n');
        return;
    }
    console.log('Update user', id, newUser);
    user[id] = newUser;
    res.status(201).json({
        "id": id
    });
});
exports.default = router;
