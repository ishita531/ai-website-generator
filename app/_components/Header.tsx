import React from 'react'
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MenuOption = [
  {
    name: 'Pricing',
    Path: '/pricing'
  },
  {
    name: 'Contact us',
    Path: '/contact-us'
  }
]
function Header() {
  return (
    <div className="flex items-center justify-between p-4 shadow" >
      <div className='flex gap-2 items-center '>
        <Image src={'/logo.svg'} alt='logo' width={35} height={35}></Image>
        <h2 className="font-bold text-xl">AI Website Generator</h2>
      </div>
      <div className="flex gap-3">
        {MenuOption.map((menu, index) => (
          <Button variant={'ghost'} key={index}>{menu.name}</Button>
        ))}
      </div>
      <div>
        <Button>Get Started <ArrowRight /></Button>
      </div>



    </div>
  )
}

export default Header