import dataMapper from "../dataMapper.js";

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {

    try {

      const figurines = await dataMapper.getAllFigurines();
  
      res.status(200).render('accueil', {figurines});

    } catch (error) {
      res.status(500).send(error);
      }
    
    },
  
  // méthode pour la page article
  articlePage(req, res) {
    
    res.render('article')
    },


  }



export default mainController;
