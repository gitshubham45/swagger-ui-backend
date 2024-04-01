
const addTokenToHeaders = (token) => (req, res, next) => {
    // Add the token to req.user.token
    req.user = { token };

    // Add the token to the request headers
    req.headers['Authorization'] = `Bearer ${token}`;

    // Proceed to the next middleware or route handler
    next();
};

module.exports = addTokenToHeaders;
