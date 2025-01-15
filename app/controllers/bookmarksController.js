import dataMapper from "../dataMapper.js";

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage(req, res) {
   
    res.render('favoris');
  },

  bookmarkAdd: async (req, res) => {

    if(!req.session.bookmarks) {
      
      req.session.bookmarks = [];
    }

    const figId = Number(req.params.id)

    const searchedFig = req.session.bookmarks.find((figurine) => figurine.id === figId);

    if (searchedFig === undefined) {

      const figurine = await dataMapper.getOneFigurine(figId);

      req.session.bookmarkAdd.push(figurine);

    }

    res.redirect('/bookmarks')

  },

  deleteBookmark: (req, res) => {
    
    const figId = Number(req.params.id);

    
    req.session.bookmarks = req.session.bookmarks.filter(
      (fig) => fig.id !== figId
    );

    res.redirect("/bookmarks");
  },

};


export default bookmarksController;