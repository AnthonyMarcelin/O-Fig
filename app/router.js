import express from 'express';

// on importe nos controllers
import mainController from './controllers/mainController.js';
import bookmarksController from './controllers/bookmarksController.js';
import dataMapper from './dataMapper.js';



const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// page catégorie
router.get('/category/:category', mainController.categoryPage);

// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage);

router.get('/bookmarks/add/:id', bookmarksController.bookmarkAdd);

router.get("/bookmarks/delete/:id", bookmarksController.deleteBookmark);

// on exporte le router 
export default router;
