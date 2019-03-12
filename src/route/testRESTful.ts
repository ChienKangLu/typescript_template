import * as express from 'express';
import * as path from 'path';

let router = express.Router();
let id:number = 0;
let users:any = {};

//Create a user
router.post('/', (req, res, next,) => { // cmd.exe | curl -H "Content-Type:application/json" -d "{\"name\": \"Leo\",\"number\": \"01156109\"}" http://localhost:3000/testRESTful -v
    id++;
    let user = req.body;//data
    users[id] = user;
    console.log("Create user",id,user);
    res.status(201).json({//201:Created
        "id":id
    });
});

//Read a user
router.get('/:id', (req, res, next,) => { //// cmd.exe | curl http://localhost:3000/testRESTful/1 -v
    let id = req.params.id
    let user = users[id];
    if(user == null){
        console.log( 'User not exit', id );
        res.writeHead(404); //404:Not Found
        res.end( '\n' );
        return;
    }
    console.log( 'Read user', id, user);
    res.status(200).json({//200:OK
        "id":id
    });
});

//Delete a user
router.delete('/:id', (req, res, next,) => { //// cmd.exe | curl -X DELETE http://localhost:3000/testRESTful/1 -v
    let id = req.params.id
    let user = users[id];
    if(user == null){
        console.log( 'User not exit', id );
        res.writeHead( 404 ); //404:Not Found
        res.end( '\n' );
        return;
    }
    delete users[id];
    console.log( 'Delete user', id, user);
    res.status(204).json({//204:No Content
        "id":id
    });
});

//Read all user
router.get('/', (req, res, next,) => { //// cmd.exe | curl http://localhost:3000/testRESTful -v
    console.log( 'Read all user', users);
    res.status(200).json(users);//200:OK
});

//Update a user
router.patch('/:id', (req, res, next,) => { //// cmd.exe | curl -X PATCH -H "Content-Type:application/json" -d "{\"name\": \"Jack\",\"number\": \"01156110\"}" http://localhost:3000/testRESTful/1 -v
    let id = req.params.id
    let newUser = req.body;//data
    let user = users[id];
    if(user == null){
        console.log( 'User not exit', id );
        res.writeHead(404); //404:Not Found
        res.end( '\n' );
        return;
    }
    console.log( 'Update user', id, newUser);
    user[id] = newUser;
    res.status(201).json({//201:Created
        "id":id
    });
});

export default router;
