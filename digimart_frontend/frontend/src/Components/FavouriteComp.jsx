import axios from 'axios'
import { Card } from "flowbite-react";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
export const FavouriteComp = () => {
    const [favProducts, setFavProducts] = useState([])
    const userId = localStorage.getItem("userid");
    const fetchfav = async () => {
        try {
            const response = await fetch(`http://localhost:8080/products/getfavs/${userId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setFavProducts(data);
          
        } catch (error) {
            console.error('Error fetching cart items:', error);
            setError('Failed to fetch cart items');
        }
    }
    const removeFavorite = async (productId) => {
        try {
             await axios.delete(`http://localhost:8080/products/delfav/${productId}/${userId}`);
                toast.success("Removed")
                // setFavProducts(favProducts.filter((product) => product.productId !== productId));
                fetchfav()
            
            // Remove the product from the list
        } catch (error) {
            console.error('Error removing favorite product:', error);
            setError('Failed to remove favorite product');
        }
    };
    useEffect(() => {
        fetchfav()
    }, [])
    return (
        <div className='mt-20 px-4 lg:px-24'>
            <h3 className="mb-5 ml-2 mt-11 text-3xl text-yellow-600 font-bold">Favourite Products</h3>
            <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
           
            {favProducts.length ? (favProducts.map((product) => (
                   
                    <Card key={product.productId}
                        className="max-w-sm p-4 h-70 w-60 "
                        imgAlt=""
                        imgSrc={product.imgUrl}
                        // href={`/products/${product.productId}`}
                        >

                        <Link to={`/products/${product.productId}`}>
                        <h2 className='text-lg font-bold text-yellow-700'>{product.productName}</h2>
                        <p className='text-sm text-gray-500'>By : {product.authorName}</p>
                        {/* <p className='text-sm text-gray-700 mt-2'>{product.description}</p> */}
                        <div className=''>
                            <p className='text-sm  text-gray-500'>Quantity: {product.quantity}</p>
                            <p className='text-md mt-2 font-medium'>Price: ${product.price}</p>
                        </div>
                        </Link>
                        <button
                           type='button'
                            className="rounded-lg bg-yellow-600 px-2 py-2 text-center text-sm font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                            onClick={() => removeFavorite(product.productId)}
                        >
                            Remove

                        </button>

                    </Card>
                            
                ))
            ) : (
                <div className='text-xl ml-2 mt-5 bg-slate-300 rounded p-3  font-bold'>No favourite Products</div>
              )}
            </div>


        </div>
    )
}