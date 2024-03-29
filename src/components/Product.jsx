import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Product = () => {
  const [selectedInterval, setSelectedInterval] = useState('30');
  const [products, setProducts] = useState([
    {
      name: 'Product 1',
      des:'Lorem Ipsum, giving information on its origins, as well as a random ',
      image: 'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg',
      stock: 100,
      price: 50,
      totalSale: 500
    },
    {
      name: 'Product 2',
      des:'Lorem Ipsum, giving information on its origins, as well as a random ',
      image: 'https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_1280.jpg',
      stock: 80,
      price: 70,
      totalSale: 700
    },
    // Add more products as needed
  ]);

  const handleIntervalChange = (e) => {
    setSelectedInterval(e.target.value);
    // Here you can fetch data from an API or adjust static data based on the selected interval
    // For simplicity, I'll just adjust the static data here
    switch (e.target.value) {
      case '30':
        // Data for the last 30 days
        setProducts([
          {
            name: 'Product 1',
            des:'Lorem Ipsum, giving information on its origins, as well as a random ',
            image: 'https://cdn.pixabay.com/photo/2017/11/22/22/53/nuts-2971675_1280.jpg',
            stock: 90,
            price: 50,
            totalSale: 450
          },
          {
            name: 'Product 2',
            des:'Lorem Ipsum, giving information on its origins, as well as a random ',
            image: 'https://cdn.pixabay.com/photo/2018/07/14/22/53/currants-3538617_1280.jpg',
            stock: 70,
            price: 70,
            totalSale: 650
          },
      
        ]);
        break;
      case '15':
        // Data for the last 15 days
        setProducts([
          {
            name: 'Product 1',
            des:'Lorem Ipsum, giving information on its origins, as well as a random ',
            image: 'https://cdn.pixabay.com/photo/2017/07/28/16/30/bee-pollen-2549125_960_720.jpg',
            stock: 95,
            price: 50,
            totalSale: 400
          },
          {
            name: 'Product 2',
            des:'Lorem Ipsum, giving information on its origins, as well as a random ',
            image: 'https://cdn.pixabay.com/photo/2020/04/14/18/13/honey-5043708_1280.jpg',
            stock: 75,
            price: 70,
            totalSale: 600
          },
        
        ]);
        break;
      case '7':
        // Data for the last 7 days
        setProducts([
          {
            name: 'Product 1',
            des:'Lorem Ipsum, giving information on its origins, as well as a random ',
            image: 'https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_1280.jpg',
            stock: 98,
            price: 50,
            totalSale: 300
          },
          {
            name: 'Product 2',
            des:'Lorem Ipsum, giving information on its origins, as well as a random ',
            image: 'https://cdn.pixabay.com/photo/2016/09/05/19/31/dessert-1647467_960_720.jpg',
            stock: 78,
            price: 70,
            totalSale: 500
          },
        
        ]);
        break;
      default:
     
        break;
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="mb-8 flex justify-between items-center">
       
       <div className='w-2/3'>
       <h2 className='font-poppins text-lg text-gray-900'>Product Sell</h2>
       </div>
     

            {/* search bar */}
       <div className=" flex items-center bg-white rounded-full shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-l-full focus:outline-none"
        />
        <button className="text-gray-600 focus:outline-none px-4">
          <FaSearch />
        </button>
      </div>


<div className=''>
<select id="interval" className="p-2" value={selectedInterval} onChange={handleIntervalChange}>
          <option value="30">Last 30 Days</option>
          <option value="15">Last 15 Days</option>
          <option value="7">Last 7 Days</option>
        </select>
        </div>


      </div>


      <table className="w-full  ">
        <thead className='mb-4'>
          <tr>
            <th className='font-poppins text-gray-500 text-base '>Product Name</th>
            <th className='font-poppins text-gray-500  '></th>
           
            <th className='font-poppins text-gray-500 text-base '>Stock</th>
            <th className='font-poppins text-gray-500  text-base'>Price</th>
            <th className='font-poppins text-gray-500 text-base'>Total Sale</th>
          </tr>
        </thead>
        
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>


               <td><img src={product.image} alt={product.name} className="mt-8 h-24 w-36 rounded-lg object-cover" /></td>
             
             <div className='flex flex-col mt-8 '>
             <td className=' font-poppins font-bold'>{product.name}</td>
              <td className=' font-poppins font-semibold text-sm text-gray-500'>{product.des}</td>
              
             </div>
             
              <td className='font-poppins '>{product.stock}</td>
              <td className='font-poppins '>${product.price}</td>
              <td className='font-poppins '>{product.totalSale}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default Product;
