import pkg from 'jsonwebtoken';
import { environment } from "../config/environment.js";
const { jwt } = pkg;       

export const createJWT = (payload) => {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, environment.SECRET_KEY, (err, token) => {
        if (err) {
          reject('Error while creating the token')
        }
  
        resolve({ token })
      })
    })
  };