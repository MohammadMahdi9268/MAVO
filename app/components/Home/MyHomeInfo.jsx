import Image from 'next/image'
import TypedComponent from './TypedComponent'
import Link from 'next/link'
import 'animate.css'
//! for use this packege we shoud use this in the className animate__animated
//! and after that go to this site https://animate.style/ and copy another class for use

function MyHomeInfo({ token }) {
  return (
    <div className="w-full h-full dark:bg-gray-200 flex justify-center items-center bg-black text-white">
      <div
        className="h-screen lg:h-auto overflow-hidden w-full mx-auto py-20 mt-14 px-4 text-center xl:px-16 xs:px-8 grid sm:flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4"
        dir="rtl"
      >
        <div className="w-full flex justify-center items-center mt-10">
          <div className="relative lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] sm:h-[400px] sm:w-[200px] h-[300px] w-[200px]">
            <div className="flex justify-center">
              <Image className="  mt-0" src="/Group-374.png" alt="vectores" width={900} height={20} />
            </div>
          </div>
        </div>
        <div className="w-full flex  flex-col justify-center sm:gap-7 ml-8 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
          <h1 className="sm:text-4xl text-2xl mb-5 font-family-semibold leading-relaxed  animate__animated  animate__flipInX">
            ماوو، هنر دیجیتال در خدمت رویاهای شما{' '}
          </h1>

          <p
            className=" text-sm sm:text-lg text-justify font-family-light leading-7 text-white font-bold mx-auto max-w-4xl"
            dir="rtl"
          >
            با سال‌ها تجربه در طراحی و فروش سایت‌های حرفه‌ای و همکاری با کسب‌وکارهای موفق، ما در ماوو به خوبی با نیازهای
            شما آشنا هستیم. ما راه‌حل‌هایی ساده، امن و زیبا ارائه می‌دهیم تا دنیای دیجیتال شما را متحول کنیم. از طراحی
            سایت‌های جذاب تا فروش سایت‌هایی که به رشد شما کمک می‌کنند، ماوو همیشه کنار شماست.
          </p>

          <div className="sm:mt-4 xs:mt-2 gap-8">
            <button
              className={`${
                token == 'nothing' ? 'h-0 opacity-0' : 'h-12 opacity-100 animate__animated animate__backInDown'
              } px-6 py-2 bg-blue-700 hover:bg-blue-800 text-lg font-family-bold rounded-lg text-white transition-all duration-700`}
            >
              <Link href={'#'}>درخواست مشاوره</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHomeInfo
