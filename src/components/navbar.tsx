import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { navigate } from 'react-router-dom';

const navbar = () => {

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/signup');
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    return (
        <div>
            <div className="navbar bg-base-100 justify-between">
                <a className="font-bold normal-case text-xl">Public Gallary</a>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default navbar