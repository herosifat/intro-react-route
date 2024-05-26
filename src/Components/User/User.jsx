import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";
import './User.css'
const User = () => {
    const user =useLoaderData();
    console.log(user)
    return (
        <div>
            <h2>USer data:{user.length}</h2>
            <h2>This user toh my website</h2>
            <div className="data">
                {
                    user.map(use => <Use key={use.id} use={use}></Use>)
                }
            </div>
        </div>
    );
};

export default User;