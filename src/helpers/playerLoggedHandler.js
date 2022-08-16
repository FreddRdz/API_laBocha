const userLogged = (player) => {
  let info = { status: 0, data: '' };
  player === true
    ? (info = { status: 201, data: 'User logged!' })
    : (info = { status: 403, data: 'Password or email incorrect!' });

  return info;
};

module.exports = { userLogged };
