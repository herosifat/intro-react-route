import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} =post;
    const navigate =useNavigate();
    const handleShowDetails =()=>{
navigate(`/post/${id}`);
    }
    return (
        <div className="use">
            <h4>Post of Id :{id}</h4>
            <p>Post Of Title:{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Show More details</button>
        </div>
    );
};

export default Post;