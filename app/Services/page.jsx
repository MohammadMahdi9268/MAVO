'use client'
import { TfiWorld } from 'react-icons/tfi'
import { MdOutlineHomeWork } from 'react-icons/md'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import Image from 'next/image'
export default function Services(params) {
  return (
    <div className="mt-12">
      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6 text-3xl text-center text-blue-950">خدمات ما</span>
      </span>
      <div className="grid grid-cols-2 mt-12" dir="rtl">
        <div className="px-16 mt-14">
          <Image src={'/dassefvrdcxzximg.svg'} width={700} height={200} alt="vector" />
        </div>
        <div className="mr-28 space-y-3">
          <div className="max-w-lg bg-white rounded-lg hover:shadow-md border transition-all duration-200 dark:bg-gray-800">
            <div className="p-6">
              <div>
                <div className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <TfiWorld size={24} />
                </div>
                <a
                  href="#"
                  className="block mb-2 text-lg font-semibold text-gray-800 transition-colors duration-300"
                  tabIndex={0}
                  role="link"
                >
                  طراحی سایت
                </a>
                <p className="leading-relaxed text-sm">طراحی سایت اختصاصی برای کسب و کارهای کوچک , متوسط و بزرگ</p>
              </div>
            </div>
          </div>
          <div className="max-w-lg bg-white rounded-lg hover:shadow-md border transition-all duration-200 dark:bg-gray-800">
            <div className="p-6">
              <div>
                <div className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <MdOutlineLocalGroceryStore size={24} />
                </div>
                <h2 className="text-base text-gray-900 font-medium title-font mb-2">طراحی سایت فروشگاهی</h2>
                <p className="leading-relaxed text-sm">طراحی سایت فروشگاه آنلاین با امکانات خاص</p>
              </div>
            </div>
          </div>
          <div className="max-w-lg bg-white rounded-lg hover:shadow-md border transition-all duration-200 dark:bg-gray-800">
            <div className="p-6">
              <div>
                <div className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <MdOutlineHomeWork size={24} />
                </div>
                <h2 className="text-base text-gray-900 font-medium title-font mb-2">طراحی پورتال سازمانی</h2>
                <p className="leading-relaxed text-sm">طراحی پورتال سازمانی برخوردار از امنیت بالا</p>
              </div>
            </div>
          </div>
          <div className="max-w-lg bg-white rounded-lg hover:shadow-md border transition-all duration-200 dark:bg-gray-800">
            <div className="p-6">
              <div>
                <div className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <TfiWorld size={24} />
                </div>
                <h2 className="text-base text-gray-900 font-medium title-font mb-2">تولید سامانه های سفارشی</h2>
                <p className="leading-relaxed text-sm">طراحی و تولید سامانه های سفارشی تحت وب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
