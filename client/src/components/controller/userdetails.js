
import axios from 'axios';
const url = 'http://localhost:5000'
var headers = {
  'Content-Type': 'application/json',
  'token': localStorage.getItem("token")
}

const userlogin=(loginDetails)=> {
    try {
      return axios.post(url + "/login", {loginDetails}, {
        headers: headers
      });
    } catch (e) {
      console.log(e)
    }
  }

  export default {userlogin}