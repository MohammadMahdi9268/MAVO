'use client'
import { showToast } from '@/app/utils/alert'
import axios from 'axios'
import { useState } from 'react'

function Comment() {
  const [formData, setFormData] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className=" bg-[#50C878] p-12">
      <h2 className="text-3xl font-bold mb-2 text-center text-white">نظرات خود را برای ما بنویسید</h2>
      <div className="border border-gray-700 p-4 bg-white rounded-lg max-w-xl mx-auto mt-10">
        <form dir="rtl" className="">
          <div className="mb-4">
            <label className="block text-black font-medium mb-2" htmlFor="comment">
              نظر:
            </label>
            <textarea
              rows={4}
              type="text"
              onChange={(e) => setFormData(e.target.value)}
              value={formData}
              className="appearance-none border border-gray-400  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-white"
              id="comment"
              placeholder=""
              defaultValue={''}
            />
          </div>
          <div className="flex justify-center mt-9">
            <button
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-800 transition-all duration-500 text-white font-medium py-3 px-5 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Comment
