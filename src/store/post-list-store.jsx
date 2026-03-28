import {createContext, useReducer} from "react";

 export const PostList = createContext( {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
   
});
const PostListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);

    }else if(action.type === "ADD_POST"){
        newPostList = [...currPostList, action.payload];
    }



    return newPostList;
};

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST);

const addPost = (userId, postTitle, postBody, reactions, tags) => {
   dispatchPostList({type: "ADD_POST", payload: {

     id : Date.now(),
    title : postTitle,
    body : postBody,
    reactions: reactions,
    userId: userId,
    tags: tags,

   }});
};

    const deletePost = (postId) => {
        dispatchPostList({type: "DELETE_POST", payload: {postId}});
    
    }; 
    
    return (<PostList.Provider  value={
        { postList,
        addPost,
        deletePost,}
    }>{children}</PostList.Provider>);
};
const DEFAULT_POST_LIST = [{
    id : `1`,
    title : `going to mumbai`,
    body : ` I am going to mumbai for vacation, I am very excited to visit the city and explore its culture and food.`,
    reactions: 2,
    userId: `user-9`,
    tags: [ `vacation`, `mumbai`, `travel`],
},
{
    id : `2`,
    title : `visiting delhi`,
    body : ` I am visiting delhi next week, I am excited to see the historical sites and try the local cuisine.`,
    reactions: 1,
    userId: `user-10`,
    tags: [ `travel`, `delhi`, `history` ],
}
];

export default PostListProvider;