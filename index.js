// Toujours commencer par importer les variables d'environnement !
import 'dotenv/config';

import express from 'express';
import path from 'node:path';
import session from 'express-session';

// on importe le router
import router from './app/router.js';

import dataMapper from './app/dataMapper.js';

const app = express();

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('public'));

// Utiliser le moteur de rendu
app.set('views', path.join(import.meta.dirname, 'app', 'views'));
app.set('view engine', 'ejs');

// Permet d'utiliser category par défaut dans toutes mes ejs ( pas besoin de les mettre en paramètres de vues (render))
app.locals.category = await dataMapper.getArticleCategory(); 

app.use(session({
  resave:true,
  saveUninitialized:true,
  secret: process.env.SECRET,
  cookie: {
    secure: false,
    maxAge: 3600000 * 24 * 7,
  }
}));



// routage !
app.use(router);

// on lance le serveur
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});