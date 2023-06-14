import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate, } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn}><FcGoogle className='h-10 w-8'></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;