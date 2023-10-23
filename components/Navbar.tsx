import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: "search" } ,
  { src: '/assets/icons/black-heart.svg', alt: "heart" } ,
  { src: '/assets/icons/user.svg', alt: "user" } ,
]

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav mx-auto'>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.png"
            width={27}
            height={27}
            alt="logo"
          />

          <p className='nav-logo'>Price<span className='text-primary-green'>Trackr</span></p>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar