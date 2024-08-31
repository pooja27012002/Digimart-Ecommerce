import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast  } from 'react-toastify';

const ShopComp = () => {

  const [products, setProducts] = useState([]);
  // const [cate, setCate] = useState([]);
  const [categories, setCategories] = useState({});
  const userId = localStorage.getItem("userid");
  const fetchData = async () => {
    try {
      // Fetch products
      const productsResponse = await fetch("http://localhost:8080/products");
      const productsData = await productsResponse.json();
      setProducts(productsData);

      // Fetch categories
      const categoryIds = [...new Set(productsData.map(product => product.categoryId.cateId))];
      const categoriesPromises = categoryIds.map(id =>
        fetch(`http://localhost:8080/category/${id}`).then(res => res.json())
      );
      const categoriesData = await Promise.all(categoriesPromises);
      const categoriesMap = categoriesData.reduce((acc, category) => {
        acc[category.categoryId] = category.categoryName;
        return acc;
      }, {});
      setCategories(categoriesMap);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    
  
    fetchData();
  }, []);

  const addtocart = async (productid) => {
    try {
      const response = await axios.post(`http://localhost:8080/cart/public/carts/${userId}/products/${productid}/quantity/1`)
      console.log(response);
      toast.success("Added to cart")
      fetchData();
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  return (
    <div className='mt-20 px-4 lg:px-24'>
      <h3 className="mb-5 ml-2 mt-11 text-3xl text-yellow-600 font-bold">Shop Items</h3>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
   
        {
          products.map(product => (
            <Card
              key={product.productId}
              className="max-w-sm h-70 w-60 "
              imgAlt=""
              imgSrc={product.imgUrl}
              href={`/products/${product.productId}`}
            >
              <figure className="">
                <div className="badge badge-secondary font-bold text-xs text-red-500 ">
           
                  {categories[product.categoryId.cateId] || 'Loading..'}
                </div>
              
              </figure>
              <Link to={`/products/${product.productId}`}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.productName}
                </h5>
                <p className='font-semibold text-xs mt-2'>By : {product.productName}</p>
              </Link>
              <div className="mb-5 mt-2.5 flex items-center">
                <span className="mr-2 rounded bg-amber-300 py-0.5 text-xs font-semibold text-black dark:bg-cyan-200 dark:text-cyan-800">
                  Quantity - {product.quantity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ₹{product.price}
                </span>
                <Link
                  to=""
                  className="rounded-lg bg-yellow-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                  onClick={()=>addtocart(product.productId)}
                >
                  Add to cart
                 
                </Link>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  );
  
}

export default ShopComp