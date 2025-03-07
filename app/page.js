'use client'
import { useEffect, useState } from 'react'
import Blog from './components/Blog/Blog'
import MyHomeInfo from './components/Home/MyHomeInfo'
import { checkToken } from './utils/logFunction'
import 'animate.css'

import Comment from './components/comment/Comment'
import dynamic from 'next/dynamic'

import Contactus from './Contactus/page'
import { SiInstagram } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

import Services from './Services/page'
import Customers from './Customers/page'
import About from './about/page'
import Guide from './Guide/page'
import Peoplecoment from './components/peoplecoment/page'
import Footer from './components/Footer/page'

export default function Home() {
  //! start  check log in or no
  const [token, setToken] = useState('nothing')

  useEffect(() => {
    const checkTokenAndSetState = async () => {
      try {
        const logOrNo = await checkToken()
        setToken(logOrNo)
      } catch (error) {
        console.error('Error checking token:', error)

        setToken(false)
      }
    }

    // Use setTimeout if you still want the delay
    setTimeout(checkTokenAndSetState, 100)
  }, [])
  //* finish  check log in or no

  return (
    <div className="items-center justify-center  animate__animated">
      <MyHomeInfo token={token} />
      <Services />
      <Customers />
      <About />
      <Guide />
      <Peoplecoment />
      <Blog />
      {token == true && <Comment />}
    </div>
  )
}
