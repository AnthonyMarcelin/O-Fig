import path from 'node:path';

const mainController = {

  // méthode pour la page d'accueil
  homePage(request, response) {
    // Remplacer le response.sendFile par le rendu d'un fichier EJS
    response.sendFile('accueil', {
      root: path.join(import.meta.dirname, '../../public'),
    });
  },

  // méthode pour la page article
  articlePage(request, response) {
    // Remplacer le response.sendFile par le rendu d'un fichier EJS
    response.sendFile('article', {
      root: path.join(import.meta.dirname, '../../public'),
    });
  }
};


export default mainController;
