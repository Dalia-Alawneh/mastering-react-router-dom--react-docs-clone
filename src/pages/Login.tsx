import PageWrapper from '../hoc/PageWrapper'
import { useLocation } from "react-router-dom";
import Input from "../components/ui/Input";

const LoginPage = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className='text-center'>
            <h2 className="text-center mb-3">Login to Contribute</h2>
            <form className="space-y-3 max-w-sm mx-auto">
                <Input type="email" placeholder="Email address" />
                <Input type="password" placeholder="Password" />

                <button>Login</button>
            </form>
        </div>
    );
};

const WrappedLogin = PageWrapper(LoginPage)
export default WrappedLogin
