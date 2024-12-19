import token from '../middleware/token.js';
import userModel from '../model/userModel.js';

const service = {
  async resisterService(details) {
    const result = await userModel.registerModel(details);
    return result;
  },

  async loginService(email, password) {
    const result = await userModel.loginModel(email, password);
    const token_data = await token.getToken(result._id);
    let details = Object.assign(result, token_data);
    return details;
  },
};

export default service;
