import React, { useState } from 'react';
//import Layout from '../../components/Layout/Layout';
import avtar from '../assets/pooja.jpg';
import banner from '../assets/banner4.jpg';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    
      <div >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={banner} />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <a href="https://www.linkedin.com/in/pooja-jadhav-a82055222/" target="_blank" rel="noopener noreferrer">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 overflow-hidden hover:opacity-75 transition-opacity duration-300">
                      <img src={avtar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  </a>
                  <div className="flex flex-col items-center text-center justify-center mt-4">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Pooja Jadhav</h2>
                    <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      Hello and thank you for visiting! At Digi<span className='text-yellow-600'>Mart</span>, we’re excited to offer you the latest and most innovative digital products to enhance your digital life.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    At Digi<span className='text-yellow-600'>Mart</span>, we believe in the power of collaboration and community. Follow us on social media to stay updated on the latest product releases, special offers, and industry trends. Join our mailing list to receive exclusive updates and insights directly in your inbox.
                  </p>
                  <p>
                    Thank you for choosing Digi<span className='text-yellow-600'>Mart</span>. We look forward to serving you and helping you find the perfect digital products to meet your needs.
                  </p>
                  <button 
                    onClick={handleLearnMoreClick} 
                    className="text-yellow-500 inline-flex items-center focus:outline-none"
                  >
                    Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  {showMore && (
                    <div className="mt-4 p-4  rounded">
                      <p className="text-base">Have questions or need support? Reach out to us at <Link to='/contact' className='text-yellow-600'>Contact Us</Link>, and we'll be happy to assist you.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
};

export default AboutUs;
