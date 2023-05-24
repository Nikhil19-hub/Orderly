const express = require("express");

const router = express.Router();

const Users = require("../models/userModel");

router.post("/create-user", (req, res) => {
  console.log("In user router");
  const users = new Users({
    name: req.body.name,
    email: req.body.email,
  });

  //   users.save((err, user) => {
  //     if (err) {
  //       res.status(400).send({ error: err });
  //     } else {
  //       res.status(200).send({ data: user });
  //     }
  //   });

  console.log(users);

  users
    .save()
    .then(() => {
      res.status(200).send({ data: users });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: err });
    });
});

module.exports = router;
