import React from 'react';
import Resume from '../../resume/Resume (3).pdf'
import img from '../../img/preview.jpg'
import { Link, Outlet } from 'react-router-dom';

const Navbar = ({children}) => {
  const menuItems = <>
  <li><a href='/'>Home</a></li>
  <li><a href='/about'>About</a></li>
  <li><a href='/Counts'>Counts</a></li>
  <a href={Resume} download={Resume}><button class="btn btn-outline text-white">Download Resume</button></a>
  
 
  
</>
    return (
        <div class="drawer">
          <Outlet></Outlet>
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
   
    <div class="w-full navbar bg-accent text-white sticky top-0  z-50" >
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2 text-xl text-blue-200 font-mono">Shihab <span className='text-primary text-xl font-serif'>Reza</span></div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
         
         {menuItems}
          
        </ul>
      </div>
    </div>
   
    {children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      
      {menuItems}
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;