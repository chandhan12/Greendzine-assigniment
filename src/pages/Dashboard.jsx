import React, { createContext, useState } from 'react';
import Navbar from '../components/Navbar';
import BalanceCard from '../components/BalanceCard';
import Sidebar from '../components/Sidebar';
import TransctionIcon1 from '../assets/TransctionIcon1.svg'
import TransctionItem from '../components/TransctionItem';

import TransctionIcon2 from '../assets/TransctionIcon2.svg'
import TransctionIcon3 from '../assets/TransctionIcon3.svg'
import UserCard from '../components/UserCard';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import nextIcon from '../assets/Group 56.svg'
import sendIcon from '../assets/sendIcon.svg'
import { BalanceHistory } from '../components/BalanceHistory';
import { WeeklyActivity } from '../components/WeeklyActivity';
import Piechart from '../components/Piechart';

export const SideBarContext = createContext();

const Dashboard = () => {
  const [sidebarOpen, setSideBarOpen] = useState(true);

  return (
    <SideBarContext.Provider value={{ sidebarOpen, setSideBarOpen }}>
      <div className="flex h-screen ">
        <Sidebar />
        <div
          className={`flex-1 ${
            sidebarOpen ? 'ml-60' : 'ml-6'
          } bg-slate-50 md:bg-slate-100 h-fit mb-5 transition-all duration-300`}
        >
          <Navbar />
        <div className='flex justify-center md:hidden m-2 '>
          <div className=' bg-slate-300 flex rounded-2xl w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-slate-400 ml-2 mt-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
           <input type="text" className='bg-slate-300 placeholder-slate-500 rounded-lg p-2 pl-3 w-full  ' placeholder='Search for something'/>
           </div>
           </div>
          <div className="p-4  w-full justify-between h-auto grid grid-cols-12 gap-4">
            <div className="flex flex-col col-span-12 md:col-span-8 gap-4 h-auto p-4 rounded-md">
              <div className="flex justify-between items-center ml-12">
                <div className='text-slate-700 text-lg'>My Cards</div>
                <div className="text-slate-700 text-lg cursor-pointer md:mr-12">See All</div>
              </div>
              <div className=" justify-center items-center gap-4 flex-1 md:flex flex-wrap">
                
                <BalanceCard color="blue" />
                <BalanceCard />
                
              </div>
            </div>
            <div className="flex flex-col col-span-12 md:col-span-4   p-4 rounded-md">
              <div className="mb-4 text-lg  text-slate-700 ">Recent Transactions</div>
              <div className="bg-white h-48 w-80 mr-5  rounded-2xl flex flex-col shadow-md">
                <TransctionItem image={TransctionIcon1} title={"Deposite from my card"} date="28 january 2021" symbol="-" amount='$850'/>
                <TransctionItem image={TransctionIcon2} title={"Deposite paypal"} date="25 january 2021" symbol="+" amount='$2,500'/>
                <TransctionItem image={TransctionIcon3} title={"Jemi Wilson"} date="21 january 2021" symbol="+" amount='$5,400'/>
              </div>
            </div>
          </div>
          <div className=' h-auto w-full grid grid-cols-12 p-2 m-2'>
          <div className=' col-span-12 md:col-span-8 h-auto p-2 '> 
            <h1 className='ml-6 text-slate-600'>Weekly Activity</h1>
            <div className='h-64 mb-4 md:mb-3'>
              <WeeklyActivity/>
            </div>
          </div>

          <div className=' col-span-12 md:col-span-4 h-auto p-2'>
            <h1 className='ml-6 mb-2 text-slate-600'>Expense Statistics</h1>
            <div className=' bg-white items-center justify-center flex rounded-md m-3 mt-4'>
            <Piechart/>
            </div>
          </div>
        </div>
        <div className=' h-auto w-full grid grid-cols-10 gap-3 p-2 m-2'>
          <div className=' col-span-10 md:col-span-4 h-52   ml-5 mr-3 text-slate-600'> Quick Transfer
            <div className='rounded-2xl bg-white h-56 w-full p-4 mt-2 flex flex-col justify-center items-center gap-4 '>
             <div className='flex gap-6 ml-3 mt-7'>
              <UserCard photo ={user1} name="Lavia Bator" role="CEO"/>
              <UserCard photo ={user2} name="Randy press" role="Director"/>
              <UserCard photo ={user3} name="Workman" role="Designer"/>
              <div className='mt-14 md:mt-1'>
                <img src={nextIcon} alt="" />
              </div>
             </div>
             <div className='flex gap-2  mx-10 w-10/12 items-center mb-5 '>
              <div className=' mr-6 md:mr-16 text-slate-400'>
                Write Amount
              </div>
              <div className='grid grid-cols-3 gap-2 bg-slate-200 rounded-3xl w-36 mr-4 md:mr-4 md:w-40 pl-2 h-10  '>
               <div className='col-span-2 items-center flex justify-start ml-2 text-slate-400'>
               525.50
               </div>
                <span className='rounded-3xl col-span-1  bg-blue-500 flex items-center justify-center mr-3 md:mr-5 text-white h-10 w-20 p-4 md:w-28 '>
                  send
                  <img src={sendIcon} className='h-4  w-4 m-2' alt="" />
                </span>
              </div>
             </div>
            </div>
          </div>
          
          <div className="col-span-10 md:col-span-6 mt-16 md:m-1">
        <div className="text-lg  mb-2 text-slate-600">Balance History</div>
          <div className="bg-white w-full h-56 p-4 rounded-xl shadow-sm">
          <BalanceHistory />
          </div>
        </div>
          
          
        </div>
        </div>
        
      </div>
    </SideBarContext.Provider>
  );
};

export default Dashboard;
