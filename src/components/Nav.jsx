
import React, { useState } from 'react'
import Button from './Button';

const Nav = () => {
    let Links =[
      {name:"Trang chủ",link:"/"},
      {name:"Giới thiệu",link:"/intro"},
      {name:"Mô hình toán học",link:"/about"},
      {name:"Tài liệu học tập",link:"/doc"},
      {name:"Cửa hàng",link:"/store"},
      {name:"Liên hệ", link:"/contact"}
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full fixed top-22 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 navbg'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ioni"></ion-icon>
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} nav`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        {/* <Button>
          Get Started
        </Button> */}
      </ul>
      </div>
    </div>
  )
}

export default Nav