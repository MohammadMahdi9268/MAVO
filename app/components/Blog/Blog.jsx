'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

function Blog() {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/?limit=3`

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_URL)
      setBlogs(response.data.data.blogs)
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setErrorMessage('خطا در بارگذاری بلاگ‌ها')
    }
  }

  return (
    <div>
      <section className=" bg-black text-white dark:bg-black py-14 mt-20 ">
        <div>
          <div className="text-center text-4xl">
            <h3 className="text-white">بلاگ ها</h3>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-14 px-9">
          <>
            <article className="overflow-hidden rounded-lg border  bg-black shadow-sm">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-300" dir="rtl">
                    موضوع
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
                  temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
                  soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo
                  corporis voluptatem?
                </p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  ادامه مطلب
                  <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border  bg-black shadow-sm">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-300" dir="rtl">
                    موضوع
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
                  temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
                  soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo
                  corporis voluptatem?
                </p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  ادامه مطلب
                  <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border  bg-black shadow-sm">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-300" dir="rtl">
                    موضوع
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
                  temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
                  soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo
                  corporis voluptatem?
                </p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  ادامه مطلب
                  <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          </>
        </div>
        <div className="flex justify-center items-center mt-20">
          <a href="/Allbloge">
            <button className="bg-blue-600 text-white hover:bg-blue-800 transition-all duration-500 rounded-lg px-4 py-3">
              دیدن تمامی بلاگ ها
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Blog
