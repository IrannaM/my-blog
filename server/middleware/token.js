//import required file
import jwt from 'jsonwebtoken';

const token = {
  async getToken(id) {
    try {
      const payload = { id: id };
      const record = await jwt.sign(payload, 'secret');
      if (record) {
        const token = { token: record };
        return token;
      } else {
        throw new Error('Token is not generating');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async verifyToken(req, res, next) {
    try {
      const token = req.headers.token;
      console.log('in header ==>', req.headers.token);
      const record = await jwt.verify(token, 'secret');
      if (record) {
        const token = record;
        console.log('in verifIcation Token', token);
        next();
      } else {
        throw new Error('Verification Token is not generating');
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },
};

export default token;
