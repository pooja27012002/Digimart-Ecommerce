import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, Textarea } from "flowbite-react";

const EditProducts = () => {
  const { productId } = useParams();
  const { productName,  sellerId, categoryId, imgUrl,  price, quantity, description } = useLoaderData();
  // const productCategories = [
  //   "Fiction",
  //   "Drama",
  //   "Fantasy",
  //   "Horror",
  //   "Science"
  // ];

  const [selectedProductCategory, setSelectedProductCategory] = useState([]);

  const handleChangeSelectedValue = (event) => {
    setSelectedProductCategory(event.target.value);
  }

  // Handle product update
  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedProductObj = {
      productName: form.productName.value,
      // authorName: form.authorName.value,
      sellerId: form.sellerId.value,
      categoryId: form.categoryId.value,
      imgUrl: form.imgUrl.value,
      // categoryName: selectedProductCategory,
      price: form.price.value,
      description: form.description.value,
      quantity: form.quantity.value
    };
    console.log(updatedProductObj)
    // Update product data
    fetch(`http://localhost:8080/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProductObj)
    })
      .then(res => res.json())
      .then(data => alert("Update successfully"))
      .catch(err => console.error("Error updating product:", err));
  }

  return (
    <div className='px-4 my-2'>
      <h2 className='mb-8 text-3xl font-bold'>Update the product data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="productName" value="Product Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="productName" name='productName' defaultValue={productName} type="text" placeholder="Enter Product Name" required />
          </div>
          
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="seller" value="Seller Id" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="sellerId" name='sellerId' defaultValue={sellerId} type="number" placeholder="Enter Seller Id" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="categoryId" value="Category Id" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="categoryId" name='categoryId' defaultValue={categoryId} type="number" placeholder="Enter Product categoryId" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="imgUrl" value="Image URL" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="imgUrl" name='imgUrl' defaultValue={imgUrl} type="url" placeholder="Enter image URL" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Product Category" />
            </div>
            
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Product Price" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="price" name='price' defaultValue={price} type="number" placeholder="Enter Product Price" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="quantity" name='quantity' defaultValue={quantity} type="number" placeholder="Enter Product Quantity" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-1 block">
              <Label htmlFor="description" value="Product Description" />
            </div>
            <Textarea name="description" id="description" defaultValue={description} placeholder='Write product description...' required className='w-full' rows={5} />
          </div>
          <div>
            <Button type="submit" className="lg:w-36 mx-16 h-9 mt-16 bg-blue-500 text-white font-bold py-2 px-4 rounded">Update</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProducts;
