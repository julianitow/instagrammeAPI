import express from 'express';
import fs from 'fs';
import { User } from './Models';
import { DataStructure } from './Models';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = 3000;

let dataFilePath = __dirname + "/users.json"

let users: User[] = [];
let json: DataStructure = {
  Users: users
};

app.get('/', (req, res) => {
  res.send('Instagramme API running');
});

app.post('/signup', async (req: express.Request, res: express.Response) => {
  const user: User = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  for (let i = 0; i < users.length; i++) {
    const usr = users[i];
    if(usr.username === user.username || usr.email === user.email) {
      res.status(400).send('Bad Request');
      return;
    }
  }

  users.push(user);
  json.Users = users;

  fs.writeFile(dataFilePath, JSON.stringify(json, null, 4), (err) => {
    if (err) {
      res.status(400).send('Bad Request');
    } else {
      res.status(201).send(user);
    }
  });
});

app.post('/signin', async (req: express.Request, res: express.Response) => {
  const user: User = {
    username: req.body.username,
    password: req.body.password
  }
  
  //Searching for user in json
  const userRes = findUserByUsername(user.username);
  if (userRes !== undefined ) {
    if (user.password == userRes.password)
    {
      res.status(200).send(userRes); 
    } else {
      res.status(501).send("Invalid credentials");
    }
  } else {
    res.status(501).send("Invalid credentials");
  }
});

app.listen(port, () => {
  const data = fs.readFileSync(__dirname + "/users.json");
  json = JSON.parse(String(data));
  for (let i = 0; i < json.Users.length; i++) {
    const user = json.Users[i] as User;
    users.push(user);
  }
  console.log(`server is listening on ${port}`);
}); 

function findUserByUsername(username: String): User {
  for (let i = 0; i < users.length; i++) {
    const usr = users[i];
    if(usr.username === username) {
      return usr;
    }
  }
}