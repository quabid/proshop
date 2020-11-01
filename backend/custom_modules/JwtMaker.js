import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = id =>
  jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });

export const verifyToken = token => jwt.verify(token, JWT_SECRET);

/* module.exports = {
  tokenizer: (obj, cb) => {
    jwt.sign(obj, JWT_SECRET, (err, token) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, token);
      }
    });
  },
  detokenizer: (token, cb) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, decoded);
      }
    });
  },
};
 */
/* jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function (err, token) {
    console.log(token);
}); 

jwt.verify(token, 'shhhhh', function(err, decoded) {
  console.log(decoded.foo) // bar
});

obj = {
        default: {
            title: 'JSON Web Token Secret',
            created: new Date(),
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
        }

*/
