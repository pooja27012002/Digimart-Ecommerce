import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import background from '../productimgs/background.mp4';

export default function BannerComp() {
    const [productName, setProductName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProductName(e.target.value);
    };

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/products/productname/${productName}`);
            navigate(`/products/${response.data.productId}`);
        } catch (error) {
            console.error('Error fetching product:', error);
            setError('Failed to find the product');
        }
    };

    return (
        <div className='relative px-4 lg:px-24 flex items-center'>
            {/* Background Video */}
            <video src={background} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />

            {/* Content */}
            <div className='relative z-10 flex flex-col md:flex-row justify-start items-center gap-12 py-40'>
                <div className='md:w-1/2 h-full mr-24 space-y-8'>
                    <h2 className='text-5xl text-red-800 font-bold '>Discover Your Next Adventure!
                    {/* Discover Your Next Adventure! <span className='text-red-700'>Shop Our Latest Arrival & Unleash Your Style</span> */}
                    </h2>
                    {/* <p className='md:w-4/5 font-medium'>
                        Available in 3 Sizes, Over 8 Different Genres, Up to 80% discount, 100% Original Products, Includes Free Productmarks, Doorstep Delivery.
                    </p> */}
                    <p className='text-center text-2xl mt-5 font-semibold text-[white] '>Shop Our Latest Arrival & Unleash Your Style</p>
                    <input
                        type='text'
                        id='product'
                        name='product'
                        placeholder='Search a Product'
                        value={productName}
                        className='py-2 px-2 rounded-s-sm outline-none'
                        onChange={handleChange}
                    />
                    <button
                        className='px-6 py-2 bg-yellow-600 hover:bg-black transition-all ease-in duration-200 text-white font-medium'
                        type='button'
                        onClick={getProduct}
                    >
                        Search
                    </button>
                    {error && <p className='text-red-500'>{error}</p>}
                    <Link to="/shop" className='block'>
                        <button className='font-semibold text-white bg-red-500 px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                            Explore Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
