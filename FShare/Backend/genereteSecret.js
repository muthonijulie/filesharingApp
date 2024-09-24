import { randomBytes } from 'crypto';

// Generate a random JWT secret
const secret = randomBytes(64).toString('hex');
console.log(secret);

// Export the secret
export const JWT_secret = secret;
