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
  articlePage: async (req, res) => {
    
    try {

      const id = Number(req.params.id);

      const figurine = await dataMapper.getOneFigurine(id);

      res.status(200).render('article', {figurine});

    } catch(error) {
      res.status(500).send(error);
    }

    },


  }



export default mainController;
