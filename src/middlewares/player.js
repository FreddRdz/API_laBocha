const playerMiddleware = {
  checkImageUrl: (req, res, next) => {
    // Check if imagePlayer property is undefined, if is true, we assign that variable equals to null
    if (!req.body.imagePlayer) req.body.imagePlayer = null;
    next();
  },

  checkActualClub: (req, res, next) => {
    // Check if actualClub property is undefined, if is true, we assign that variable equals to null
    if (!req.body.actualClub) req.body.actualClub = null;
    next();
  },
};

module.exports = playerMiddleware;
