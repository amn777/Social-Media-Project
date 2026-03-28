import { useContext,useRef} from "react";
import { PostList } from "../store/post-list-store";
const Createpost = () =>{

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(',').map(tag => tag.trim());

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postBodyElement.current.value = '';
    reactionsElement.current.value = '';
    tagsElement.current.value = '';

    
  }
  
    return (

       <form className="create-post" onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">USER ID</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId"  placeholder="Enter your user ID"/>
  </div>

  <div className="mb-3">
    <label htmlFor="postTitle" className="form-label">POST TITLE</label>
    <input type="text" ref={postTitleElement} className="form-control" id="postTitle"  placeholder="Enter post title"/>
  </div>

  <div className="mb-3">
    <label htmlFor="postBody" className="form-label">POST CONTENT</label>
    <textarea type="text" ref={postBodyElement} className="form-control" id="postBody"  placeholder="What's on your mind?"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">REACTIONS</label>
    <input type="number" ref={reactionsElement} className="form-control" id="reactions"  placeholder="how many people reacted?"/>
  </div>

<div className="mb-3">
    <label htmlFor="tags" className="form-label">TAGS</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags"  placeholder="Enter tags separated by commas"/>
  </div>



  
  <button type="submit" className="btn btn-primary">POST</button>
</form>


    )
}
export default Createpost;