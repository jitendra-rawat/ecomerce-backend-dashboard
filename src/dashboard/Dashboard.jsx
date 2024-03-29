import React, { useState } from 'react';
import DashboardData from './DashboardData';
import Products from './Products'
import Customers from './Customers'
import Income from './Income'
import Promote from './Promote'
import Help from './Help'
import { TbHexagonLetterO } from "react-icons/tb";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { TbHelpTriangleFilled } from "react-icons/tb";
import { FaAngleDown,FaAngleRight  } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Dashboard':
        return <DashboardData />;
      case 'Products':
        return <Products />;
      case 'Customers':
        return <Customers />;
      case 'Income':
        return <Income />;
 
      case 'Promote':
        return <Promote />;
        case 'Help':
            return <Help/>;
        
      default:
        return <DashboardData />;
    }
  };

  return (
    <section className='bg-gray-200 h-auto flex justify-start items-stretch '>

      
      {/* left section */}
         
      <div className='bg-[#280274] h-screen fixed max-w-xs container auto'>

        <div className='flex items-center gap-2 px-8 py-8'>
        <TbHexagonLetterO size={40}  color='white'/>  
          <h2 className='font-poppins text-2xl text-white font-semibold'>Dashboard</h2>
        </div>

  <div className=' my-10 px-10  mx-auto container flex flex-col items-start justify-start'>
    
  

    
  <div className='w-full h-12 p-2 bg-violet-900 hover:bg-black active:bg-black rounded-lg flex items-center justify-start my-2  '>

<button className='px-2 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex items-center gap-2    ' onClick={() => handleOptionClick('Dashboard')}>
  <RiShieldKeyholeFill size={20} /> Dashboard
</button>
 
</div>


<div className='w-full h-12 hover:bg-black active:bg-black rounded-lg flex items-center justify-between my-2'>

<button className='px-4 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex items-center gap-2' onClick={() => handleOptionClick('Products')}>
  <MdProductionQuantityLimits size={20} /> Products
</button>

<FaAngleRight size={20} color='white' />
 
</div>


<div className='w-full h-12 hover:bg-black active:bg-black rounded-lg flex items-center justify-between my-2'>

<button className='px-4 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex items-center gap-2' onClick={() => handleOptionClick('Customers')}>
  <FaUserCircle size={20} /> Customers
</button>

<FaAngleRight size={20} color='white' />
 
</div>

<div className='w-full h-12 hover:bg-black active:bg-black rounded-lg flex items-center justify-between my-2'>

<button className='px-4 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex items-center gap-2' onClick={() => handleOptionClick('Customers')}>
  <RiMoneyDollarCircleFill size={20} /> Income
</button>

<FaAngleRight size={20} color='white' />
 
</div>

<div className='w-full h-12 hover:bg-black active:bg-black rounded-lg flex items-center justify-between my-2'>

<button className='px-4 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex items-center gap-2' onClick={() => handleOptionClick('Promote')}>
  <RiMoneyEuroCircleFill size={20} /> Promote
</button>
<FaAngleRight size={20} color='white' />
 
</div>

<div className='w-full h-12 hover:bg-black active:bg-black rounded-lg flex items-center justify-between my-2'>

<button className='px-4 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex justify-between items-center gap-2 ' onClick={() => handleOptionClick('Help')}>
  <TbHelpTriangleFilled size={20} /> Help
</button>

<FaAngleRight size={20} color='white' />
 
</div>




<div className='mt-36 w-full p-4 h-14 bg-violet-900 hover:bg-black active:bg-black rounded-lg flex items-center justify-between my-2'>

<button className='px-4 py-2 text-base text-white cursor-pointer font-poppins font-semibold flex items-center gap-2' onClick={() => handleOptionClick('Help')}>
 <img className='w-10 rounded-full object-cover' src="https://avatars.githubusercontent.com/u/120551529?v=4" alt="" />Envanto 
</button>
<FaAngleDown color='white' size={20}/>
 
</div>



  
    
  </div>
</div>


      {/* right section */}
      <div className='p-8 absolute left-[320px]'>
        {renderContent()}
      </div>
    </section>
  );
};

export default Dashboard;