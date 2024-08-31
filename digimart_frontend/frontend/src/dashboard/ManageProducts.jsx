import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  // const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => {

        if (Array.isArray(data)) {
          setAllProducts(data);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Delete a product
  const handleDelete = (productId) => {
    fetch(`http://localhost:8080/products/${productId}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Product is deleted successfully");

      if (Array.isArray(data)) {
        setAllProducts(data); 
      } else {
        setAllProducts(prevProducts => prevProducts.filter(product => product.productId !== productId));
      }

      // navigate("/admin/dashboard/manage");
    })
    .catch(error => console.error('Error deleting product:', error));
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage your products</h2>
      <Table hoverable className='float-right lg:w-[1000px]'>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit/Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          Array.isArray(allProducts) && allProducts.length > 0 ? (
            allProducts.map((product) => (
              <Table.Body key={product.productId} className="divide-y hover:bg-slate-100 text-center">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-slate-100">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.productId}
                  </Table.Cell>
                  <Table.Cell>{product.productName}</Table.Cell>
                  <Table.Cell>{product.authorName}</Table.Cell>
                  <Table.Cell>{product.quantity}</Table.Cell>
                  <Table.Cell>{"\u20B9"}{product.price}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/admin/dashboard/edit/${product.productId}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(product.productId)} className='bg-red-600 py-1 font-semibold text-white rounded-lg px-4 ml-5'>Delete</button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))
          ) : (
            <Table.Body className="divide-y hover:bg-slate-100">
              <Table.Row>
                <Table.Cell mt-5 colSpan={6} className="text-center">No products available</Table.Cell>
              </Table.Row>
            </Table.Body>
          )
        }
      </Table>
    </div>
  );
}

export default ManageProducts;
