'use client'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'
import Image from 'next/image'
export default function Footer(params) {
  return (
    // <div>
    //   {' '}
    //   <footer className="text-white  body-font bg-black">
    //     <div className="container md:px-5 md:py-24 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    //       {/* <div className="relative mx-auto">
    //           <DynamicMap
    //             // if you want to use neshan you can use this
    //             linkMap="https://neshan.org/maps/places/bf0ce0389824120c711bc13eae59011d#c32.478-51.782-20z-0p"
    //             witchMap="google"
    //             locationClient={[32.67074832369401, 51.69005174573447]}
    //             zoomClient={18}
    //           />
    //         </div> */}

    //       <div className="flex-grow  justify-center  flex flex-wrap  md:pl-20  -mb-10  md:mt-0 md:text-left">
    //         <div className="flex justify-center">
    //           <Image src={'/logo.png'} width={200} height={2} alt="Mohammad" />
    //         </div>
    //         <div className="lg:w-1/4 md:w-1/2 w-full  text-center mt-8">
    //           <h2 className="title-font font-medium text-white tracking-widest text-sm mb-4">لینک های مهم</h2>
    //           <nav className="list-none flex flex-col gap-5">
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">خانه</a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">درباره ما</a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">حساب کاربری</a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">رزرو وقت</a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center mt-8">
    //           <h2 className="title-font font-medium text-white text-sm mb-3">خدمات</h2>
    //           <nav className="list-none mb-10 flex flex-col gap-3">
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">سایت های شرکتی</a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 mb-4 transition-all duration-300">سایت های فروشگاهی</a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">سایت های </a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">وکیل مختص به قرارداد</a>
    //             </li>
    //             <li>
    //               <a className="text-white hover:text-gray-500 transition-all duration-300">وکیل انحصار وراثت</a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div className="text-center flex flex-col">
    //           <h3 className="md:w-[450px] text-center text-sm leading-10 " dir="rtl">
    //             شرکت داده آسان ایرانیان (ایزی وب) فعالیت خود را از فروردین سال ١٣٩٣ با هدف طراحی و تولید نرم‌افزارهای
    //             تحت وب و ارائه راهکارهای کارآمد در این حوزه آغاز نموده است. به‌کارگیری نیروی متخصص، احترام به مشتری و
    //             تحویل به موقع و با کیفیت کارها، ارزش‌های شرکت داده آسان است؛ ارزش‌هایی که باعث شده شرکت‌های نام آشنا و
    //             سازمان‌های بزرگ به سرعت به لیست کارفرمایان شرکت داده آسان ایرانیان اضافه شده و برای طولانی مدت به این
    //             شرکت وفادار بمانند.
    //           </h3>
    //           <div className="flex justify-center mt-8 gap-5">
    //             <a className="md:ml-3 text-white text-center">
    //               <SiInstagram size={23} />
    //             </a>
    //             <a className="text-white">
    //               <FaWhatsapp size={23} />
    //             </a>
    //             <a className=" text-white">
    //               <FaTelegramPlane size={23} />
    //             </a>
    //           </div>
    //           <div>
    //             <div className="mt-10">
    //               <h3 className="mt-3">شماره تماس:09913389268</h3>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gray-100 text-black ">
    //       <div className=" text-center  py-3 px-5    ">
    //         <h3 className="text-center" dir="rtl">
    //           تمامی حقوق سایت متعلق به محمد مهدی قرقانی می باشد.
    //         </h3>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <>
      {/* Footer container */}
      <footer className="bg-black text-white text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span>در شبکه های اجتمایی مارا دنبال کنید {''}:</span>
          </div>
          {/* Social network icons container */}
          <div className="flex justify-center gap-6 mr-5">
            <FaInstagram size={25} />
            <FaTelegram size={25} />
            <FaWhatsapp size={25} />
          </div>
        </div>
        {/* Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* TW Elements section */}
            <div className="flex justify-center flex-col items-center">
              <a href="/" className="flex title-font font-medium items-center text-gray-900  md:mb-10 ml-7">
                <Image
                  src={'/Screenshot__177_-removebg-preview_LE_upscale_balanced_x4.jpg'}
                  width={690}
                  height={2}
                  alt="Mohammad Mahdi"
                  className=""
                />
              </a>
            </div>
            {/* Products section */}
            <div className="ml-14">
              <h6 className="mb-6 flex justify-center font-semibold uppercase md:justify-start">لینک های مهم</h6>
              <p className="mb-7">
                <a href="/" className="hover:text-gray-500 transition-all duration-500">
                  خانه
                </a>
              </p>
              <p className="mb-7">
                <a href="/Allbloge" className="hover:text-gray-500 transition-all duration-500">
                  بلاگ
                </a>
              </p>
              <p className="mb-7">
                <a href="/AboutUS" className="hover:text-gray-500 transition-all duration-500">
                  درباره ما
                </a>
              </p>
              <p className="mb-7">
                <a href="/Contactus" className="hover:text-gray-500 transition-all duration-500">
                  ارتباط با ما
                </a>
              </p>
              <p>
                <a href="/FAQ" className="hover:text-gray-500 transition-all duration-500">
                  سوالات متداول
                </a>
              </p>
            </div>
            {/* Useful links section */}
            <div>
              <h6 className="mb-6 flex justify-center font-semibold uppercase md:justify-start">خدمات ما</h6>
              <p className="mb-7">
                <a className="hover:text-gray-500 transition-all duration-500">سایت های شرکتی</a>
              </p>
              <p className="mb-7">
                <a className="hover:text-gray-500 transition-all duration-500">سایت های فروشگاهی</a>
              </p>
              <p className="mb-7">
                <a className="hover:text-gray-500 transition-all duration-500">پورتال سازمانی</a>
              </p>
              <p className="mb-7">
                <a className="hover:text-gray-500 transition-all duration-500">تولید سامانه های سفارشی</a>
              </p>
            </div>
            {/* Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">ارتباط با ما</h6>

              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                09913389268
              </p>
            </div>
          </div>
        </div>
        {/*Copyright section*/}
        <div className="bg-gray-200 text-black p-4 text-center">
          <span>تمامی حقوق این سایت متعلق به گروه ماوو می باشد</span>
        </div>
      </footer>
    </>
  )
}
