import userModel from '../Model/userModel.js'


const service ={
    async loginService(email_id, password){
        const result = await userModel.loginModel(email_id, password);
        return result; 
    }
}

export default service;


git config --global user.email "iranna@isoaccess.com"
  git config --global user.name "IrannaM"