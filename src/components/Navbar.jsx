import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [extentedNavbar,setExtentedNavbar] = useState(false)
    console.log(extentedNavbar);
  return (
    <nav className="flex px-5 py-8 bg-slate-700 justify-between items-center text-white" >
    <h1 className="flex text-3xl">logo</h1>
      <ul className={`flex lg:static flex-col lg:flex-row text-xl gap-6 absolute duration-700
      ${extentedNavbar? " text-white top-24 right-0 px-10 py-2  bg-slate-700":"top-24 right-[-100px]"}`}>
        <li>Home </li>
        <li>About</li>
        <li>Career</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
      <div className="text-3xl lg:hidden cursor-pointer" onClick={()=>setExtentedNavbar(open=>!open)}>
      {
extentedNavbar?<CloseIcon/>:<MenuIcon/>
}
      </div>

    </nav>

  );
};
export default Navbar
