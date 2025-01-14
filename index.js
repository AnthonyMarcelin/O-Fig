// Toujours commencer par importer les variables d'environnement !
import 'dotenv/config';

import express from 'express';
import path from 'node:path';

// on importe le router
import router from './app/router.js';

const app = express();

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('public'));

// Utiliser le moteur de rendu
app.set('views', path.join(import.meta.dirname, 'app', 'views'));
app.set('view engine', 'ejs');

// routage !
app.use(router);

// on lance le serveur
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});