import axios from 'axios';
const url = 'http://localhost:5000';
var headers = {
  'Content-Type': 'application/json',
  token: localStorage.getItem('token'),
};

const blogAllDetails = () => {
  try {
    return axios.get(url + '/blog-view-all', {
      headers: headers,
    });
  } catch (e) {
    console.log(e);
  }
};

const blogCreate = createBlogDetails => {
  try {
    return axios.post(
      url + '/blog-create',
      { createBlogDetails },
      {
        headers: headers,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const blogUpdate = (updateBlogDetails, id) => {
  try {
    console.log('in Blog checking', url + '/blog-update' + `?id=${id}`);
    return axios.put(
      url + '/blog-update' + `?id=${id}`,
      { updateBlogDetails },
      {
        headers: headers,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

export default { blogAllDetails, blogCreate, blogUpdate };
