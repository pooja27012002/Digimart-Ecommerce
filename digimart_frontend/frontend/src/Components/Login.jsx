import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import banner from "../productimgs/banner.jpg";
// import {Link} from 'react-router-dom'
export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(credentials);
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                username: credentials.username,
                password: credentials.password
            });

            const userId = response.data.userId;
            if (userId) {
                localStorage.setItem("userid", JSON.stringify(userId));
                toast.success("Successfully logged in");
                navigate("/"); // Redirect to home page or other destination
            } else {
                toast.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error("Login failed. Please check your credentials.");
        }
    };

    return (
        <div 
            className="relative flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50 blur-md"></div> {/* Background blur overlay */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Welcome!!! Sign in Back here...
                    </h2>
                </div>

                <div className="relative z-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={credentials.username}
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-black text-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-gray-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"> 
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to="/register" className="font-semibold leading-6 text-yellow-600 hover:text-yellow-500">
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
