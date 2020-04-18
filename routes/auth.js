const express = require('express');
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const saltRounds = 10;

/* GET USER */
router.get('/', function(req, res, next) {
  const id = req.session.currentUser._id
  User.findById(id)
    .populate('todo')
    .then((currentUser) => {
      currentUser.password = "";
      res
        .status(200)
        .json(currentUser);
    })
});

/* CREATE USER */
router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const usernameExists = await User.findOne({ username }, 'username');
    
    if (usernameExists) return next(createError(400));
    else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = await User.create({username, password: hashPass});
      newUser.password = "";
      req.session.currentUser = newUser;
      res 
        .status(201)
        .json(newUser);
    }
  }
  catch(error){
    next(createError(error));
  }
});

/* LOGIN USER */
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try{
    const user = await User.findOne({username});
    if (!user) {
      next(createError(404));
    }
    else if (bcrypt.compareSync(password, user.password)) {
      user.password= "";
      req.session.currentUser = user;
      res
        .status(200)
        .json(user)
    }
    else {
      next(createError(401));
    }
  }
  catch (error) {
    next(createError(error));
  }
})

/* LOGOUT USER */
router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res
    .status(204)
    .send();
});

module.exports = router;

/* UPDATE USER */
// router.put('/:id', function(req, res, next) {
//   const { username, password } = req.body;
//   const {id} = req.params;

//   User.findByIdAndUpdate(id, {username, password}, {new: true})
//     .then(() => {
//       res
//         .status(200)
//         .json({message: `The user IDed ${id} was updated successfully`}); 
//     })
//     .catch(err => {
//       res
//       .status(501)
//       .json(err);
//     });
// });