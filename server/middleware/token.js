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
};

export default token;
