const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      return next(); // User is an admin, proceed to the next middleware or route handler
    }
  
    return res.status(403).json({ message: 'Permission denied. Admin access required.' });
  };
  

module.exports=isAdmin