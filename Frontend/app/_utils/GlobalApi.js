const { default: axios } = require("axios");

//created axio client to create endpoint
const axioClient=axios.create({
    baseURL:'http://localhost:8000'
});

const createuser = (data)=>axioClient.post('/user', data)
const getUserByEmail = (email)=>axioClient.get('/user/'+email)
const createPost = (data)=>axioClient.post('/post',data)

export default{
     createuser,
     getUserByEmail,
     createPost
}