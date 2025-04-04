module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end();  // Pre-flight request
    }
    
    next();
  };