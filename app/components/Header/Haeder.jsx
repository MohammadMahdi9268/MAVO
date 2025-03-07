'use client'
import Image from 'next/image'
import { FaCaretDown } from 'react-icons/fa6'

export default function Header() {
  return (
    <header className=" body-font bg-black text-white">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={'/logo2removebg-preview.png'} width={180} height={2} alt="Mohammad Mahdi" className="ml-5" />
        </a>
        <nav
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center gap-11"
          dir="rtl"
        >
          <a href="/" className=" hover:text-gray-400 transition-all duration-300">
            خانه
          </a>
          <a href="/Allbloge" className=" hover:text-gray-400 transition-all duration-300">
            بلاگ
          </a>

          <a className=" hover:text-gray-400 transition-all duration-300 flex ">
            <FaCaretDown className="mt-1 ml-2" />
            درباره ما
          </a>

          <a href="/FAQ" className="ml-8 hover:text-gray-400 transition-all duration-300">
            سوالات متداول
          </a>
        </nav>
        <button className="inline-flex items-center mr-9 border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
          <a href="/logIn">ثبت نام / ورود</a>
        </button>
      </div>
    </header>
  )
}
