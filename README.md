Instagramme API
===========================

Description
-----------

Cet API sert de backend pour accompagner l'application [Instagramme](https://github.com/julianitow/instagramme).
Les endpoints sont:
```
http://localhost:3000/
http://localhost:3000/signup
http://localhost:3000/signin
```

### Le projet contient les dépendances suivantes:

```json
"devDependencies": {
    "@types/express": "^4.16.1",
    "nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "tslint": "^5.12.1",
    "typescript": "^3.3.3"
  },
  "dependencies": {
    "express": "^4.16.4"
  }
```

Installation
============
1. cloner ce repo: 
```shell
git clone git@github.com:julianitow/instagrammeAPI.git
```
2. Installer les dépendances: 
``` 
npm install 
```    
3. Démarrer le service:    
``` 
npm start 
```
Sortie attendue:
````
> sample-ts-app@1.0.0 start
> rm -rf dist && mkdir dist && cp src/users.json ./dist/ && tsc && node dist/index.js

Instagramme API running & listening on port:3000
````



Developpement
===========
> ``` npm run start:watch```  
Pour démarrer le service et le relancer à chaque changement automatiquement
