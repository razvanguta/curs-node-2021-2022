const authorizationMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){
      try{
        console.log(authorization)
      const decoded = jwt.verify(authorization.replace('Baerer ',''),MY_SECRET_KEY);
      } catch(e){
        res.send({
          error: "Invalid token",
        })
      }
      if(isValid){
        next()
      }
    }
  }

  module.exports = authorizationMiddleware;