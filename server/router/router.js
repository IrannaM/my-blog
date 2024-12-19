import express from 'express';
import blogDetails from '../controller/blogcontroller.js';
import userDetails from '../controller/userController.js';
import token from '../middleware/token.js';
const router = express.Router();

router.post('/register', userDetails.register);
router.post('/login', userDetails.login);

router.post('/blog-create', token.verifyToken, blogDetails.create);
router.get('/blog-view-all', token.verifyToken, blogDetails.viewAll);
router.get('/blog-view-single', token.verifyToken, blogDetails.viewSingle);
router.put('/blog-update', token.verifyToken, blogDetails.update);
router.get('/blog-search', token.verifyToken, blogDetails.search);
export default router;
