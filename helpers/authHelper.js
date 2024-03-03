const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saltRounds = 12; 
const jwtSecret = process.env.JWT_SECRET; 

if (!jwtSecret) {
    throw new Error('JWT secret key is not provided');
}

//hasing algorithm
exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

//comparing 
exports.comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

//generateJWT 
exports.generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role, email: user.email, name: user.name }, jwtSecret, { expiresIn: '7d' }); 
};

//verify JWT 
exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        console.error('Error verifying token:', error);
        throw new Error('Invalid token');
    }
};
