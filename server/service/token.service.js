import jwt from 'jsonwebtoken';

export const tokenSignIn = (id) => {
    return jwt.sign({ _id: id }, 
        process.env.JWT_SECRET, {
        expiresIn: '2d'
    });
}