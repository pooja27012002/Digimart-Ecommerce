import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
const Footer = () => {
  return (
      <>
        <footer className="bg-black text-white">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
              <h3 className="font-bold text-2xl">
              {/* <span><FaBasketShopping /></span> */}
                Digi<span class='text-yellow-600'>Mart</span><br /><br />
              </h3>

              <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <span class="mr-2"><FaFacebook size={22}/></span>
                <a href="https://www.linkedin.com/in/pooja-jadhav-a82055222/" target="_blank" rel="noopener noreferrer" >
                  <span className="mr-2" ><FaLinkedin size={22} /></span>
                </a>
                <span class="mr-2"><FaInstagram size={22}/></span>
                <span><FaTwitter size={22}/></span>
              </p><br /><br /><br /><br />
              {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4"> */}
                      <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                        SUBSCRIBE
                      </h2>
                      <form className="flex flex-col sm:flex-row items-center">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full sm:w-auto flex-grow p-2 mb-3 sm:mb-0 rounded text-gray-900"
                        />
                        <button
                          type="submit"
                          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded sm:ml-2"
                        >
                          Subscribe
                        </button>
                      </form>
                    {/* </div> */}
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                SOCIAL
                </h2>
                <ul className="list-none mb-10">
                  <li className="mt-1">Features</li>
                  <li className="mt-1">Info Center</li>
                  <li className="mt-1">New Blog</li>
                  {/* <li className="mt-1">Login</li> */}
                </ul>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                  COMPANY
                </h2>
                <ul className="list-none mb-10">
                  <li className="mt-1">About Us</li>
                  <li className="mt-1">Privacy Policy</li>
                  <li className="mt-1">Terms & Condition</li>
                  <li className="mt-1">Login</li>
                </ul>
              </div>
             
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                  CONTACT
                </h2>
                <ul className="list-none mb-10">
                <li className="mt-1">Send Email</li>
                  <li className="mt-1">Contact Sales</li>
                  <li className="mt-1"></li>
                  <li className="mt-1">Support</li>
                  <li className="mt-1">+9195488434</li>
                </ul>
              </div>
              
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                  TECH SUPPORT
                </h2>
                <ul className="list-none mb-10">
                  <li className="mt-1">Contact Support</li>
                  <li className="mt-1">Info Center</li>
                  <li className="mt-1">Activate</li>
                </ul>
              </div>
            

            </div>
          </div>
          <hr />
          <div>
          {/* <div className="bg-gray-500 text-white"> */}
            <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-center">
              <p className="text-sm text-center sm:text-left">
                All rights reserved by <span className="text-yellow-600 hover:text-yellow-700 text-white  ">Digimart 2024</span>
              </p>

              
              {/* <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a href="https://www.facebook.com" className="text-white hover:text-gray-400 mx-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com" className="text-white hover:text-gray-400 mx-2">
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a href="https://www.instagram.com" className="text-white hover:text-gray-400 mx-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com" className="text-white hover:text-gray-400 mx-2">
                    <i className="fab fa-twitter"></i>
                  </a>
              </p> */}

            </div>
          </div>
        </footer>
      </>
    );
    
  
}

export default Footer
