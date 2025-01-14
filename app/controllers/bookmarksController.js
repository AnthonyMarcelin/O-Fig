import path from 'node:path';

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage(request, response) {
    // A remplacer par le rendu d'un fichier EJS
    response.sendFile('favoris', {
      root: path.join(import.meta.dirname, '../../public'),
    });
  }

};


export default bookmarksController;
