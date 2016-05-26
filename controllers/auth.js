module.exports = { // TODO: Create signin action
  signin: (req, res, next) => {
    console.log(req.body);
    res.json({ email: req.body.email, password: req.body.password });
  },

  signup: (req, res, next) => { // TODO: Create signup action
    console.log(req.body);
    res.json({ email: req.body.email, password: req.body.password });
  },
};
