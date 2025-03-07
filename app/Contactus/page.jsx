'use client'

import Image from 'next/image'
import Comment from '../components/comment/Comment'
import Footer from '../components/Footer/page'
import ContactusForm from './ContactusForm/page'
import ContactusSection from '../ContactusSection/page'
export default function Contactus(params) {
  return (
    <>
      <div className="w-full h-full dark:bg-gray-200 flex justify-center items-center bg-black text-white">
        <div
          className="h-screen lg:h-auto overflow-hidden w-full mx-auto py-20 mt-14 px-4 text-center xl:px-16 xs:px-8 grid sm:flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4"
          dir="rtl"
        >
          <div className="w-full flex justify-center items-center mt-10">
            <div className="relative lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] sm:h-[400px] sm:w-[200px] h-[300px] w-[200px]">
              <div className="flex justify-center">
                <Image className="  mt-0" src="/CouncatUs.png" alt="vectores" width={900} height={20} />
              </div>
            </div>
          </div>
          <div className="w-full flex  flex-col justify-center text-center  sm:gap-7 ml-8 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
            <h1 className="sm:text-4xl text-2xl mb-5 font-family-semibold leading-relaxed  animate__animated  animate__flipInX">
              با ما تماس بگیرید
            </h1>

            <p className=" text-sm sm:text-lg  font-family-light leading-7 text-white font-bold text-end   mx-auto max-w-5xl">
              لطفاً در مورد هر سؤالی که دارید با ما در زیر تماس بگیرید!
            </p>
          </div>
        </div>
      </div>
      <ContactusSection />
      <div className="bg-black text-white py-24">
        <div className="text-3xl text-center">
          <h3 className="mb-6">چند سوال دارید؟</h3>
          <h3 className="text-base text-white mt-8" dir="rtl">
            بیایید در مورد وب سایت شما صحبت کنیم. برای ما پیام ارسال کنید و ما طی یک روز کاری در تماس خواهیم بود.
          </h3>
        </div>
      </div>
      <ContactusForm />
    </>
  )
}
