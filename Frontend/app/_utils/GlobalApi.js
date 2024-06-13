const { default: axios } = require("axios");

//created axio client to create endpoint
const axioClient=axios.create({
    baseURL:'http://localhost:8000'
});

const createuser = (data)=>axioClient.post('/user', data)
const getUserByEmail = (email)=>axioClient.get('/user/'+email)
const createPost = (data)=>axioClient.post('/post',data)
const getAllPosts = ()=>axioClient.get('/post')
const onPostLike = (postId, data)=>axioClient.put('/post/like/'+postId,data)
const addComment = (data)=>axioClient.post('/comment',data)


export default{
     createuser,
     getUserByEmail,
     createPost,
     getAllPosts,
     onPostLike,
     addComment
}