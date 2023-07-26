import React from 'react'
import { AiFillCaretLeft } from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi'; 
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <h1 className="before:content-['C'] before:bg-primary before:text-[#fff]
        before:p-[10px] before:pl-[15px] before:pr-[15px] before:font-light before:text-[14px] md:before:text-[17px] before:rounded-full
        before:mr-2.5 text-[18px] md:text-[20px] inline-block">Coffee Shop
        </h1>
      </div>
      <div className="bg-accent flex items-center px-2 rounded-full w-[200px] md:w-[400px] lg:w-[500px]">
        <BiSearch className="text-[#cccbcb] cursor-pointer" size={20}/>
        <input className="border-none w-full p-1.5 focus:outline-none bg-transparent" type="text" placeholder='Search foods'/>
      </div>
      <button className="bg-primary text-white flex items-center py-1.5 px-2 rounded-xl">
        <FaShoppingCart size={15} className="mr-2"/>Cart
      </button>
    </header>
  )
}

export default Header