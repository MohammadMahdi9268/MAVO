'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { CiUser } from 'react-icons/ci'
import { checkAdminOrNo, checkToken } from '@/app/utils/logFunction'
import { MdOutlineAddToPhotos } from 'react-icons/md'

export default function HeaderContent() {
  const [token, setToken] = useState(false)
  const [admin, setAdmin] = useState(false)
  const pathname = usePathname()

  const isActive = useCallback(
    (path) => {
      if (path.startsWith('/logIn')) {
        return pathname === '/logIn'
      }
      return pathname === path
    },
    [pathname]
  )

  const [adminList, setAdminList] = useState(false)
  const [adminListHidden, setAdminListHidden] = useState(true)

  function handleCloseAdminList(params) {
    setAdminList(false)
    setTimeout(() => {
      setAdminListHidden(true)
    }, 500)
  }

  function handleOpenAdminList(params) {
    setAdminList(true)
    setTimeout(() => {
      setAdminListHidden(false)
    }, 100)
  }

  return (
    <nav>
      <ul ul className="md:flex items-center justify-between text-base   pt-4 md:pt-0">
        {admin == true && (
          <div className="relative" onMouseLeave={handleCloseAdminList}>
            <div
              className={`
           
            
            ${
              adminList ? 'animate__animated animate__fadeIn ' : 'animate__animated animate__fadeOutUp '
            }  text-white absolute  mt-14  w-full     z-50 p-4 overflow-hidden rounded-lg `}
            >
              <div className="flex flex-col gap-y-3 justify-center items-center">
                <Link
                  href={'/addCourses'}
                  onClick={handleCloseAdminList}
                  className="bg-[#51657B] rounded-md flex justify-center items-center gap-x-1 p-1 py-2 text-sm w-full text-center hover:bg-white hover:text-[#51657B] transition-all duration-300 "
                >
                  <MdOutlineAddToPhotos />
                  <span className="font-family-medium">دوره</span>
                </Link>
                <Link
                  onClick={handleCloseAdminList}
                  className="bg-[#51657B] rounded-md p-1 py-2 text-sm w-full text-center hover:bg-white hover:text-[#51657B] transition-all duration-300 font-family-medium"
                  href={'/addCourses/all'}
                >
                  دوره‌ها
                </Link>
                <Link
                  onClick={handleCloseAdminList}
                  className="bg-[#51657B] rounded-md p-1 py-2 text-sm w-full text-center hover:bg-white hover:text-[#51657B] transition-all duration-300 font-family-medium"
                  href={'/allUser'}
                >
                  کاربرها
                </Link>
                <Link
                  onClick={handleCloseAdminList}
                  className="bg-[#51657B] rounded-md p-1 py-2 text-sm w-full text-center hover:bg-white hover:text-[#51657B] transition-all duration-300 font-family-medium"
                  href={'/allRegister'}
                >
                  ثبت نامی‌ها
                </Link>
                <Link
                  onClick={handleCloseAdminList}
                  className="bg-[#51657B] rounded-md p-1 py-2 text-sm w-full text-center hover:bg-white hover:text-[#51657B] transition-all duration-300 font-family-medium"
                  href={'/comment'}
                >
                  نظرات
                </Link>
                <Link
                  onClick={handleCloseAdminList}
                  className="bg-[#51657B] rounded-md p-1 py-2 text-sm w-full text-center hover:bg-white hover:text-[#51657B] transition-all duration-300 font-family-medium"
                  href={'/BlogAdd'}
                >
                  بلاگ
                </Link>
                <button className="" onClick={handleCloseAdminList}>
                  <FaWindowClose />
                </button>
              </div>
            </div>
            <button
              onClick={handleOpenAdminList}
              className={`md:p-4 py-3 w-48 text-right animate__animated animate__fadeIn   px-0 block  ${
                isActive('') ? 'text-rose-500' : 'text-block'
              }`}
            >
              ادمین
            </button>
          </div>
        )}

        {headerLinks.map((item, index) => (
          <Link
            className={`md:p-4 py-14 ${item.isLog && 'hidden'}  ${
              isActive(item.path) ? 'text-rose-500' : 'text-block'
            }`}
            key={`${index}-${item.path}`}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}

        {token === 'nothing' ? (
          <p>در حال بارگذاری</p>
        ) : (
          token && (
            <div className="relative">
              <Link href={'/userInformation'}>
                <CiUser size={24} />
              </Link>
            </div>
          )
        )}

        {/* //* برای هدر استفاده کن */}
        {/* <div
          className={`
            ${adminListHidden && 'hidden'}
            
            ${
              adminList ? 'animate__animated  animate__fadeInRight ' : 'animate__animated animate__fadeOutRight '
            } bg-blue-700 fixed   right-0 inset-y-0 sm:w-3/12 w-1/3 z-50 p-10 overflow-hidden`}
        >
          <div>hi</div>
          <button
            onClick={() => {
              setAdminList(false)
              setTimeout(() => {
                setAdminListHidden(true)
              }, 500)
            }}
          >
            x
          </button>
        </div> */}
      </ul>
    </nav>
  )
}
