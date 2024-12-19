import userService from '../service/userService.js';

const controller = {
  register(req, res) {
    const { registerDetails } = req.body;
    userService
      .resisterService(registerDetails)
      .then(result => {
        return res.status(200).json({ Status: 200, Data: result });
      })
      .catch(error => {
        return res.status(400).json({ Status: 400, Error: error.message });
      });
  },

  login(req, res) {
    console.log('in Login Controller Page :: ');
    const { email, password } = req.body.loginDetails;
    userService
      .loginService(email, password)
      .then(result => {
        // console.log('in controller ::', result);
        return res.status(200).json({ Status: 200, Data: result });
      })
      .catch(error => {
        return res.status(400).json({ Status: 400, Error: error.message });
      });
  },
};

export default controller;
