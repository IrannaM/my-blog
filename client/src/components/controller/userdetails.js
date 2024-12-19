import axios from 'axios';
const url = 'http://localhost:5000';
var headers = {
  'Content-Type': 'application/json',
  token: localStorage.getItem('token'),
};

const userlogin = loginDetails => {
  try {
    return axios.post(
      url + '/login',
      { loginDetails },
      {
        headers: headers,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const fetchPosts = loginDetails => {
  return async dispatch => {
    try {
      const response = await axios.post(
        url + '/login',
        { loginDetails },
        {
          headers: headers,
        }
      );
      const data = await response.data;
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error: error.response });
    }
  };
};

export default { userlogin, fetchPosts };
