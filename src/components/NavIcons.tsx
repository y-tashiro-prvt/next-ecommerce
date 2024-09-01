"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter(); // useRouter()を呼び出す必要があります

  // Temporary
  const isLoggedIn = false

  const handleProfile = () =>{
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  
  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <AccountCircleIcon className=''/>
      {isProfileOpen && <div className='absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
        <Link href="">Profile</Link>
        <div className="mt-2 cursor-pointer">Logout</div>
        </div>}
      <NotificationsIcon/>
      <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
       <ShoppingCartIcon/>
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-400 rounded-full text-white text-sm flex items-center justify-center">2</div>
      </div>
      {isCartOpen && (
          <CartModal />
        )}
    </div>
  )
}

export default NavIcons