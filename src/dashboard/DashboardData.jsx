import React from 'react';
import { FaSearch } from "react-icons/fa";
import Card from '../components/Card';
import Cards from './Cards';
import Overview from '../components/Overview';
import Customer from '../components/Customer';
import Product from '../components/Product';


const DashboardData = () => {
  return (
    <div className='max-w-7xl mx-auto container h-screen '>

   
   
    <section className="flex justify-between items-center  space-x-[600px]">
      {/* Hello Text */}
      <div className="text-2xl font-poppins font-semibold">Hello Jitendra!</div>
      
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-l-full focus:outline-none"
        />
        <button className="text-gray-600 focus:outline-none px-4">
          <FaSearch />
        </button>
      </div>
    </section>


    {/* cards section */}

   <Cards />


    {/* overview and customer section */}


    <div className='flex flex-wrap justify-between items-center mt-10 my-4'>
    
    {/* overview section */}
<div className='w-2/3'>
<Overview />
</div>
  



     {/* customer section */}
     <div>
      <Customer />
 
     </div>




    </div>



     {/* product section */}
     <Product />





    </div>
  );
}

export default DashboardData;
