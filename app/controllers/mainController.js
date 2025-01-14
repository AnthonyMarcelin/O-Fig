import path from 'node:path';

const mainController = {

  // méthode pour la page d'accueil
  homePage(request, response) {
    // Remplacer le response.sendFile par le rendu d'un fichier EJS
    response.render('accueil')
    },
  

  // méthode pour la page article
  articlePage(request, response) {
    // Remplacer le response.sendFile par le rendu d'un fichier EJS
    response.render('article')
    },
  }



export default mainController;
