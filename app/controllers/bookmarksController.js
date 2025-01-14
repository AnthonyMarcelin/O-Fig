import dataMapper from "../dataMapper.js";

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage(req, res) {
   
    res.render('favoris');
  },

  bookmarkAdd(req, res) {

    req.session.bookmarks = [];


    res.redirect('/bookmarks')

  },

};


export default bookmarksController;
