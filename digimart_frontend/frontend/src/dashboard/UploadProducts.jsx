import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
const UploadProducts = () => {

  const productCategories = [
    "Fiction",
    "Drama",
    "Fantasy",
    "Horror",
    "Science"
  ]

  const [selectedProductCategory, setSelectedProductCategory] = useState(productCategories[0]);

  const handleChangeSelectedValue = async (event) => {
    console.log(event.target.value);
    setSelectedProductCategory(event.target.value);
  }

  //handle product submission
  const handleProductSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    // const authorName = form.authorName.value;
    const sellerId = form.sellerId.value;
    const categoryId = form.categoryId.value;
    const imgUrl = form.imgUrl.value;
    // const categoryName = form.categoryName.value;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const productObj = {
      productName, sellerId, categoryId, imgUrl, price, description, quantity
    }
    console.log(productObj)

    //send data to db
    try {
      const response = await fetch("http://localhost:8080/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productObj),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      alert("Product updated successfully!");
      // form.reset();
    } catch (error) {
      console.error("There was an error!", error);
      alert("Submited");
    }
  };

  return (
    <div className='px-4 my-2' >
      <h2 className='mb-8  text-3xl font-bold'>Upload A Product</h2>

      <form onSubmit={handleProductSubmit} className="flex lg:w-[1000px] flex-col gap-4">

        {/* product title */}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block ">
              <Label htmlFor="productName" value="Product Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="productName" name='productName' type="text" placeholder="Enter Product Name" required />
          </div>

          {/* author name
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="authorName" name='authorName' type="text" placeholder="Enter Author Name" required />
          </div>*/}
        </div> 

        {/* seller id and category id */}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="seller" value="Seller Id" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="sellerId" name='sellerId' type="number" placeholder="Enter Seller Id" required />
          </div>

          {/* Category Id*/}
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="categoryId" value="Category Id " />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="categoryId" name='categoryId' type="number" placeholder="Enter Product categoryId" required />
          </div>
        </div>

        {/* image url and category*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="imgUrl" value="Image URL" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="imgUrl" name='imgUrl' type="text" placeholder="Enter image URL" required />
          </div>

          {/* select category */}
          {/* <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Product Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedProductCategory} onChange={handleChangeSelectedValue}>
              {
                productCategories.map((option) =>
                  <option className='p-5' key={option} value={option}>{option}</option>
                )
              }
            </Select>
          </div> */}
        </div>

        {/* product price  and quantity*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Product Price" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="price" name='price' type="number" placeholder="Enter Product Price" required />
          </div>

          {/* Quantity */}
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="quantity" name='quantity' type="number" placeholder="Enter Product Quantity" required />
          </div>
        </div>

        {/*Product Description and submit button*/}
        <div className='flex gap-8 text-black'  >
          <div className='lg:w-1/3'>
            <div className="mb-1 block">
              <Label htmlFor="description" value="Product Description" />
            </div>
            <Textarea name="description" id="description" placeholder='Write product description...' required className='w-full' rows={5} />
          </div>
          {/* Submit Button */}
          <div>
            
            <button type="submit" className="lg:w-36 mx-16  mt-16 bg-blue-500 text-white font-bold py-2 px-4 rounded">Upload </button>
            
            
          </div>
        </div>

      </form>
    </div>
  )
}

export default UploadProducts