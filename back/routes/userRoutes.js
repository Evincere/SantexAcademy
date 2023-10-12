const express = require('express');
const { validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const isAdminMiddleware = require('../middleware/isAdminMiddleware');
const { validateUserFields, validateLoginRequest } = require('./validators');

const router = express.Router();

router.get('/:id', userController.getUserById);
router.get('/', userController.getUsers);
router.post(
  '/login',
  validateLoginRequest,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    userController.login(req, res, next);
  },
);

router.post(
  '/',
  validateUserFields,
  isAdminMiddleware,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    userController.createUser(req, res, next);
  },
);

router.put(
  '/:id',
  validateUserFields,
  isAdminMiddleware,
  userController.updateUser,
);

router.put('/restore/:id', userController.restoreUser);

router.delete(
  '/:id',
  isAdminMiddleware,
  userController.deleteUser,
);

router.get('/surveyors/actives', userController.getOnlySurveyors);

router.put('/:id/change-password', userController.changePassword);
module.exports = router;
