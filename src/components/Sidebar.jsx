import React, { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '../pages/Dashboard';
import SidebarItem from './SidebarItem';
import transerIcon from '../assets/transfer 1.svg';
import accounts from '../assets/acc.svg';
import investments from '../assets/investments.svg';
import creditCard from '../assets/credit-card 1.svg';
import loanIcon from '../assets/loan 1.svg';
import servicesIcon from '../assets/service 1.svg';
import econometrics from '../assets/econometrics 1.svg';
import settingsIcon from '../assets/settings solid 1.svg';
import homeIcon from '../assets/home 2.svg';
import bankdashIcon from '../assets/bankdashIcon.png'
import { useNavigate } from 'react-router-dom';



const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
 

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};


const Sidebar = () => {
  const { sidebarOpen, setSideBarOpen } = useContext(SideBarContext);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navigate=useNavigate()

  useEffect(() => {
    if (isDesktop == false) {
      setSideBarOpen(false)
    } else {
      setSideBarOpen(true)
    }
  }, [isDesktop])


  return (
    <>
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={() => setSideBarOpen(false)}
        ></div>
      )}
      <div
        className={`bg-white fixed top-0 left-0 h-full z-50 transition-all duration-300 ${
          sidebarOpen ? 'w-56' : 'w-0'
        }`}
      >
        <div
          className="cursor-pointer p-4 hover:bg-slate-200"
          onClick={() => setSideBarOpen(!sidebarOpen)}
        >
           <div className='flex gap-2 text-blue-500 text-lg '>
            {sidebarOpen ? <div><img src={bankdashIcon} className='h-6 w-6 ml-10' alt="" /></div> :" "}
           {sidebarOpen ? `Bank Dash` : '☰'}
            </div> 
        </div>
        {sidebarOpen && (
          <>
          <div className="p-4">
            <SidebarItem itemName="Dashboard" icon={homeIcon} color="blue" />
            <SidebarItem itemName="Transactions" icon={transerIcon} />
            <SidebarItem itemName="Accounts" icon={accounts} />
            <SidebarItem itemName="Investments" icon={investments} />
            <SidebarItem itemName="Credit Cards" icon={creditCard} />
            <SidebarItem itemName="Loans" icon={loanIcon} />
            <SidebarItem itemName="Services" icon={servicesIcon} />
            <SidebarItem itemName="My privileges" icon={econometrics} />
            <SidebarItem itemName="Settings" icon={settingsIcon} />
          </div>
          <div className=' text-center md:text-right mt-2 md:ml-2 md:mt-20'>
            <button className='text-red-400 rounded-md p-1 h-8 w-20 bg-slate-300' onClick={()=>{
                navigate('/')
            }}>Logout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
