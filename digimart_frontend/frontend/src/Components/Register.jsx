import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import banner from "../productimgs/banner.jpg";

export const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        email: "",
        mobileNumber: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8080/user', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                city: formData.city,
                country: formData.country,
                email: formData.email,
                mobileNumber: formData.mobileNumber,
                password: formData.password,
                role: formData.role
            });

            if (response.data.success) {
                toast.success("Registration successful");
                navigate("/login"); // Redirect to login page
            } else {
                toast.error("Registration failed. Please check your details.");
            }
        } catch (error) {
            console.error('Error registering:', error);
            toast.error("Registration failed. Please check your details.");
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
            <div className="absolute inset-0 bg-black opacity-50 blur-md"></div> 
            <div className="relative z-10 flex flex-col items-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Register your account
                    </h2>
                </div>

                <div className="relative z-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-yellow-600">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-yellow-600">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="mobileNumber" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        type="text"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
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
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-medium leading-6 text-yellow-600">
                                    Role
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="role"
                                        name="role"
                                        type="text"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button 
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-black text-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-gray-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already a member?{' '}
                            <Link to="/login" className="font-semibold leading-6 text-yellow-600 hover:text-yellow-500">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
