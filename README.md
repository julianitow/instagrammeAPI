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

Utilisation
===========
1. récupérer adresse IP locale:
```
$> ifconfig

en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=6463<RXCSUM,TXCSUM,TSO4,TSO6,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM>
	ether *:*:*:*:*:* 
	inet6 *::*:*:*:*%en0 prefixlen 64 secured scopeid 0x6 
	inet 10.0.0.11 netmask 0xffffff00 broadcast 10.0.0.255
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
```
>Ici 10.0.0.11

2. Accéder aux différents endpoints depuis:
```
http://<adrresse ip>:3000/signin
````
>exemple: http://10.0.0.11:3000/signin

Endpoints
=========

* POST /signup :
400 Bad Request - 201 Created
* POST /signin : 501 Unauthorized - 200 Ok

Developpement
===========
> ``` npm run start:watch```  
Pour démarrer le service et le relancer à chaque changement automatiquement
