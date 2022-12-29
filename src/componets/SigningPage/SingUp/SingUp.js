import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import signup from '../../Assese/signup.gif'
import { AuthContext } from '../../Context/authProvider';

const SingUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('Your Signup is Successful')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold leading-tight lg:text-4xl">Please Register Your Account.</h2>
                        <div className="dark:text-gray-400">Social media Email Register.</div>
                    </div>
                    <img src={signup} alt="/" className="p-6 h-52 md:h-64" />
                </div>
                <div className='flex justify-center items-center border shadow-lg px-4 '>
                    <form onSubmit={handleSingUp} noValidate="" className=" space-y-4 py-6 ng-untouched ng-pristine ng-valid w-full">
                        <div>
                            <label htmlFor="email" className="text-lg ">Name</label>
                            <input name='name' id="name" type="name" required className="w-full p-3 rounded border bg-gray-200" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-lg ">Email</label>
                            <input name='email' id="email" type="email" required className="w-full p-3 rounded border bg-gray-200" />
                        </div>
                     <div>
                            <label htmlFor="email" className="text-lg">Password</label>
                            <input name='password' id="password" type="password" required className="w-full p-3 rounded border bg-gray-200" />
                        </div>
                        {/* <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                    </div> */}
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-sky-500 to-indigo-500">Login</button>
                        <h2 className='text-center mt-0'>All ready have an Account <span className='text-blue-700 font-bold'> <Link to='/Login'>Login page.</Link></span></h2>
                        

                    </form>
                </div>

            </div>
        </div>
    );
};

export default SingUp;