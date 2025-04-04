 
// middleware/roleMiddleware.js

module.exports = (allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ message: 'User not authenticated' });
      }
  
      const userRole = req.user.role.name;  // Assuming 'role' is a related model with 'name'
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden: Insufficient role' });
      }
  
      next();  // User has appropriate role, proceed to the controller
    };
  };
  