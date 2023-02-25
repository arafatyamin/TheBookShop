import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
     const name =e.target.name.value;
     const file =e.target.file.value;
     const email =e.target.email.value;
     const password = e.target.password.value;
     console.log(name, file, email, password)

     createUser(email, password)
     .then(result => {
        const user = result.user;
        console.log(user)
     })
     .catch(err => console.error(err))
    }
    return (
        <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden w-full bg-cover lg:block lg:w-1/2" style={{backgroundImage: "url(https://i.ibb.co/1RZPttf/banner4.jpg)"}}>
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">Brand</h2>
                        
                        <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div className="flex bg-transparent items-center w-full lg:max-w-md px-6 mx-auto lg:w-1/2">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center lg:text-gray-700 lg:dark:text-white">Brand</h2>
                        
                        <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                <input type="text" name="name" id="name" placeholder="sakib al hasan" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <label class="block pt-6">
    <span class="sr-only t-2">Choose profile photo</span>
    <input type="file" name="file" class="w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-pink-300 file:text-zinc-900
      hover:file:bg-rose-300
    "/>
  </label>
                            <div>
                                <label for="email" className="block mb-2 pt-6 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <Link href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</Link>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <button
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">have an account yet? <Link to="/signIn" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign In</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;