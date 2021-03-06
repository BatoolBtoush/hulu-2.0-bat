import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,      
} from '@heroicons/react/outline';


import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className=''>
       <div >
           <HeaderItem title='HOME' Icon={HomeIcon} />

       </div>
        <Image 
        className='object-contain'
        src='https://links.papareact.com/ua6' width={200} height={100} alt='Hulu' />
    </header>
  )
}

export default Header