import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";

export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItem = [
        { link: "home", path: "/" },
        { link: "shop", path: "/shop" },
        { link: "Favourite", path: "/favs" },
        { link: "cart", path: "/cart" },
        { link: "admin", path: "/admin/dashboard" },
        { link: "login", path: "/login" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-5 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 left-0 bg-yellow-600" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo Here */}
                    <Link to="/" className='text-2xl font-bold text-white flex items-center gap-2'>
                        <FaBagShopping className='inline-block' /> 
                        <h3 className="font-bold text-2xl">
                            Digi<span className='text-white'>Mart</span>
                        </h3>
                    </Link>

                    {/* nav items for large device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItem.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-yellow-400'>
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* btn for lg devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-red-700' /></button>
                    </div>

                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none'>
                            {isMenuOpen ? (
                                <FaXmark className='h-5 w-5 text-white' />
                            ) : (
                                <FaBarsStaggered className='h-5 w-5 text-white' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-yellow-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItem.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
