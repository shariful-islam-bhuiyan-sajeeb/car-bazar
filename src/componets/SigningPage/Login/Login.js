import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login1 from '../../Assese/Login page.gif'
import { AuthContext } from '../../Context/authProvider';

const Login = () => {
    const { login, loginGoogle } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';
    

    const handleLogin = event =>{
        event.preventDefault();
        const form =event.target;
        const email= form.email.value;
        const password= form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Your Login is Successful')
            navigate(from,{replace: true})
        })
        .catch(err => console.error(err))
    }

    const handleGoogle = () => {
        loginGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold leading-tight lg:text-4xl">Please Type your <span className='text-green-500'>Login</span> !</h2>
                        <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src={login1} alt="/" className="p-6 h-52 md:h-64" />
                </div>
                <div className='flex justify-center items-center border shadow-lg px-4 '>
                    <form onSubmit={handleLogin} noValidate="" className=" space-y-4 py-6 ng-untouched ng-pristine ng-valid w-full">
                        <div>
                            <label htmlFor="email" className="text-lg ">Email</label>
                            <input name='email' id="email" type="email" required className="w-full p-3 rounded border bg-gray-200" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-lg">Password</label>
                            <input name='password' id="password" type="password" required className="w-full p-3 rounded border bg-gray-200" />
                        </div>
                        {/* <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                    </div> */}
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-sky-500 to-indigo-500">Login</button>
                        <h2 className='text-center mt-0'>New to Social Media <span className='text-blue-700 font-bold'> <Link to='/singUP'>Create new Account</Link></span></h2>
                        <div className="divider">OR</div>
                        <div>
                            <button onClick={handleGoogle} className="btn btn-outline btn-success  w-full">Continue With Google</button>
                        </div>

                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Login;