import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const use =useLoaderData();
    const {name} =use;
    return (
        <div>
            <h1>This is expendent user:{name}</h1>
        </div>
    );
};

export default UserDetails;