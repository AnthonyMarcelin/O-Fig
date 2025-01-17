import dataMapper from "../dataMapper.js";

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {

    try {
    
      const figurines = await dataMapper.getAllFigurines();
     // const category = await dataMapper.getArticleCategory();
      res.status(200).render('accueil', {figurines/*,category*/});
    } catch (error) {
      res.status(500).send(error);
      }
    
    },
  
  // méthode pour la page article
  articlePage: async (req, res) => {
    
    try {

      const figId = Number(req.params.id);
      const figurine = await dataMapper.getOneFigurine(figId);
      const reviews = await dataMapper.getArticleRewiew(figId);
      const averageNote = await dataMapper.getAverageNote(figId);
      //const category = await dataMapper.getArticleCategory();

      if (!figurine) {
        return res.status(404).send("La figurine que vous cherchez, n'existe pas");
      }

      res.status(200).render('article', {figurine, reviews, /*category,*/ averageNote});

    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }

    },

    categoryPage: async (req, res) => {

      try {

      const figCat = req.params.category;

      const figurines = await dataMapper.getFigurinesByCategory(figCat);

      //const category = await dataMapper.getArticleCategory();

      res.status(200).render('category', {figurines, /*category*/});

      } catch(error) {
        res.status(500).send(error);
      }
    },

  }



export default mainController;
