import bcrypt from 'bcryptjs';
let oldEmail = 'iranna@gmail.com'
const model ={
    async loginModel(email_id, password){
        console.log("in module", email_id , password)
        if(email_id === oldEmail){
            let data =  await bcrypt.compare( password, '$2a$10$H/vEMiMcRT2Rg5ASrWMsv.8IEYfCvfVc9NZF3I4e.aEHCuRwCTPX6')
            if(data) {
                return {email: email_id , user_id : 100}
            }else{
                throw new Error('Password is not correct');
            }
        }else{
            throw new Error('Email id is not correct');
        }
    }
}

export default model;