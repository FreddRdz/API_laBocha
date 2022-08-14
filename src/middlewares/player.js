const playerMiddleware = {
  checkImageUrl: (req, res, next) => {
    if (!req.body.imagePlayer) req.body.imagePlayer = null;
    console.log(req.body);
    next();
  },

  checkActualClub: (req, res, next) => {
    if (!req.body.actualClub) req.body.actualClub = null;
    console.log(req.body);
    next();
  },
};

module.exports = playerMiddleware;
