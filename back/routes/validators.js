const { body } = require('express-validator');

exports.validateUserFields = [
  body('firstName', 'El nombre debe tener más de dos caracteres')
    .exists()
    .isLength({ min: 3 }),
  body('lastName', 'El apellido debe tener más de tres caracteres')
    .exists()
    .isLength({ min: 4 }),
  body('userName', 'El nombre de usuario debe tener más de siete caracteres')
    .exists()
    .isLength({ min: 8 }),
  body('password', 'La contraseña debe tener al menos 8 caracteres')
    .exists()
    .isLength({ min: 8 }),
  body('email', 'Email no válido').exists().isEmail(),
  body('rol', 'Debe ingresar Admin ó encuestador')
    .exists()
    .isLength({ min: 5 }),
  body('phone', 'El número de teléfono debe ser válido')
    .optional() // El campo phone es opcional
    .isMobilePhone('any'),
];

exports.validateLoginRequest = [
  body('userName')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido')
    .isLength({ min: 3 })
    .withMessage('El nombre de usuario debe tener al menos 3 caracteres')
    .matches(/^\w+$/)
    .withMessage(
      'El nombre de usuario solo puede contener letras, números y guiones bajos (_)',
    ),
  body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
];