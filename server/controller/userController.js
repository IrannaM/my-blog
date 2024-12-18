
import userService from "../service/userService.js";

const controller = {
     login(req,res){
        const {email , password } = req.body.loginDetails;
         userService.loginService(email,password).then(result =>{
            res.status(200).json({ Status : 200 , Data :result })
        }).catch((err)=>{
            res.status(400).json({ Status : 400 , Error: err.message })
        })
    }
};


export default controller;
