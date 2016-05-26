module.exports = { // TODO: Create signin action
  signin: (req, res, next) => {
    res.json({
      user: {
        email: req.body.email,
        password: req.body.password
      }
    });
  },

  signup: (req, res, next) => { // TODO: Create signup action
    
    res.json({
      user: {
        email: req.body.email,
        password: req.body.password
      }
    });
  },
};
