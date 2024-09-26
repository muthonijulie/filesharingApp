const { randomBytes } = require ('crypto');

// Generate a random JWT secret
const secret = randomBytes(64).toString('hex');
console.log(secret);

// Export the secret
module.exports.JWT_secret = secret;
