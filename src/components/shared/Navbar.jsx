import Image from 'next/image';
import React, {useState} from 'react';
import logo from '../../../public/fullLogo.png'
import { RiMenuFill } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#fff] shadow-xl shadow-[#eeeeee]'>
            <nav className='flex items-center justify-between max-w-[1400px] w-full mx-auto font-montserrat relative lg:md:px-0 px-4'>
                <div >
                    <Link href="/">
                        <Image
                            alt="logo"
                            src={logo}
                            width={130}
                            height={80}
                            className="lg:md:w-[65%] w-[90%] h-[80%]"
                        />
                    </Link>
                </div>

                <div className='lg:md:block hidden w-full'>
                    <ul className='flex items-center justify-end gap-x-4 text-[16px] font-medium text-[#333]'>
                        <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                            <Link href="/home">Home</Link>
                        </li>
                        <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='lg:md:hidden block w-full text-end '>
                            <button onClick={() => setOpen(!open)} className="text-[#FE6B01] text-2xl"><RiMenuFill /></button>
                            {open === true &&
                            <div className="w-full flex justify-end">
                        <ul className="menu absolute w-56 rounded-box p-4 bg-[#f9e2d2] text-[14px] font-semibold text-[#333] z-[100] ">
                                {/* Sidebar content here */}
                                <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                                    <Link href="/home">Home</Link>
                                </li>
                                <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                                    <Link href="/services">Services</Link>
                                </li>
                                <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                                    <Link href="/projects">Projects</Link>
                                </li>
                                <li className='hover:text-[#FE6B01] delay-200 transition-colors'>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                            </div> 
}
                        </div>
            
            </nav>
        </div>
    );
};

export default Navbar;