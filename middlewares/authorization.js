const authorizationMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){
      try{
      const decoded = jwt.verify(authorization.replace('Baerer ',''),MY_SECRET_KEY);
      
      } catch(e){
        res.send({
          error: "Invalid token",
        })
      }
    } else {
    res.send({
      error: "Invalid token",
    })
  }
  }

  module.exports = authorizationMiddleware;