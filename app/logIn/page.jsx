'use client'
import { useEffect, useState } from 'react'
import { changeToEngNum } from '../components/Help'
import axios from 'axios'
import { handleAlertinfo, handleAlertinfoTop, Toust } from '../utils/alert'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

const isValidPhone = (str) => /^09(0[1-3]|1[0-9]|2[0-2]|3[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$/.test(str)

function LogIn() {
  const searchParams = useSearchParams()
  const isSignParam = searchParams.get('isSign')

  const [formData, setFormData] = useState({
    phoneNumber: '',
    verificationCode: '',
    name: '',
    name1: '',
    age: '',
  })
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [countdown, setCountdown] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(isSignParam == 'true' ? true : false)
  const [changeTimer, setChangeTimer] = useState(isSignParam == 'true' ? true : false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSignUp) {
      setChangeTimer(true)
    } else {
      const timer = setTimeout(() => setChangeTimer(false), 700) // 700ms is the duration of your transition
      return () => clearTimeout(timer)
    }
  }, [isSignUp])

  const validateField = (name, value) => {
    switch (name) {
      case 'phoneNumber':
        return isValidPhone(value) ? '' : 'شماره موبایل وارد شده اشتباه است'
      case 'verificationCode':
        return value.length === 6 ? '' : 'کد تایید باید 6 رقم باشد'
      case 'name':
        return value.trim() ? '' : 'لطفا نام خانوادگی خود را وارد کنید'
      case 'name1':
        return value.trim() ? '' : 'لطفا نام خود را وارد '
      case 'age':
        return value.trim() && !isNaN(Number(value)) ? '' : 'لطفا سن معتبر وارد کنید'
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = value
    if (name === 'age' || name === 'phoneNumber') {
      newValue = changeToEngNum(value)
    }
    setFormData((prev) => ({ ...prev, [name]: newValue }))
    if (isSubmitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, newValue) }))
    }
  }

  const handlePhoneSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const phoneError = validateField('phoneNumber', formData.phoneNumber)
    setErrors((prev) => ({ ...prev, phoneNumber: phoneError }))

    if (!phoneError) {
      setLoading(true)
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/sms`, { phoneNumber: formData.phoneNumber })
        setStep(2)
        setCountdown(120)
        handleAlertinfoTop('کد برای شما ارسال گردید')
      } catch (err) {
        setErrors((prev) => ({
          ...prev,
          submit: err.response?.data?.message || err.response?.data || 'خطایی رخ داد. لطفا دوباره تلاش کنید.',
        }))
      } finally {
        setLoading(false)
      }
    }
  }

  const router = useRouter()

  const handleVerificationSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const codeError = validateField('verificationCode', formData.verificationCode)
    setErrors((prev) => ({ ...prev, verificationCode: codeError }))

    if (!codeError) {
      setLoading(true)
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/validSms`, {
          phoneNumber: formData.phoneNumber,
          verificationCode: formData.verificationCode,
        })

        handleAlertinfoTop('کد تایید شد خوش آمدید')

        const newIsSign = searchParams.get('isSign') === 'course'
        const courseId = searchParams.get('coursId')
        setTimeout(() => {
          if (newIsSign == true) {
            router.push(`/CourseRegistration?coursId=${courseId}`)
          } else {
            router.push('/')
          }
        }, 2000)
        // Handle successful login
      } catch (err) {
        setErrors((prev) => ({ ...prev, submit: err.response?.data?.message || 'کد وارد شده اشتباه است' }))
      } finally {
        setLoading(false)
      }
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const newErrors = {
      name1: validateField('name1', formData.name1),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      name: validateField('name', formData.name),
      age: validateField('age', formData.age),
    }
    setErrors(newErrors)

    if (!Object.values(newErrors).some((error) => error)) {
      setLoading(true)
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/sms`, {
          phoneNumber: formData.phoneNumber,
          name: formData.name,
          age: formData.age,
          name1: formData.name1,
        })

        setStep(2)
        setCountdown(120)
        setIsSignUp(false)
        handleAlertinfoTop('کد برای شما ارسال گردید')
        // Handle successful signup
      } catch (err) {
        setErrors((prev) => ({ ...prev, submit: err.response?.data?.message || 'خطایی در ثبت نام رخ داد.' }))
      } finally {
        setLoading(false)
      }
    }
  }

  const inputClass = `mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring 
  ${errors.submit ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'}`

  const ErrorMessage = ({ message }) => (
    <p className="mt-1 text-right text-sm text-red-500 transition-all duration-300 ease-in-out">{message}</p>
  )

  useEffect(() => {
    const newIsSign = searchParams.get('isSign') === 'true'
    setIsSignUp(newIsSign)
  }, [searchParams])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      if (countdown == 1) {
        setStep(1)
      }
      return () => clearTimeout(timer)
    }
  }, [countdown])

  //* for when we have error alert that
  useEffect(() => {
    if (errors.submit) {
      handleAlertinfoTop(errors.submit)
    }
  }, [errors.submit])

  const minutes = Math.floor(countdown / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (countdown % 60).toString().padStart(2, '0')
  return (
    // <div className="">
    //   <>
    //     {Toust}
    //     <div>
    //       <div className="flex justify-center   items-center mt-16">
    //         <div className="max-w-md w-full ">
    //           {countdown == 0 && (
    //             <div className="flex justify-center gap-0 text-sm mb-4">
    //               <button
    //                 disabled={step == 2}
    //                 className={`text-2xl font-bold  transition-all duration-700 text-center text-gray-700 border-b-2 p-1 px-5   cursor-pointer ${
    //                   isSignUp && 'opacity-25'
    //                 } `}
    //                 onClick={() => {
    //                   setIsSignUp(false)
    //                 }}
    //               >
    //                 ورود
    //               </button>
    //               <button
    //                 disabled={step == 2}
    //                 className={`text-2xl font-bold  text-center text-gray-700 p-2  border-b-2  cursor-pointer transition-all duration-700 ${
    //                   !isSignUp && 'opacity-25'
    //                 }`}
    //                 onClick={() => {
    //                   setIsSignUp(true)
    //                 }}
    //               >
    //                 ثبت نام
    //               </button>
    //             </div>
    //           )}
    //           {loading && (
    //             <div className="flex justify-center mb-4">
    //               <div className="loader"></div>
    //             </div>
    //           )}
    //           {changeTimer && (
    //             <form
    //               onSubmit={handleSignUp}
    //               className={`${
    //                 step === 1 && isSignUp ? ' h-44   opacity-100 ' : ' h-0 opacity-0  '
    //               } transition-all duration-700 `}
    //             >
    //               <div className={`mb-4 `}>
    //                 <label
    //                   htmlFor="phoneNumber"
    //                   className="block text-sm text-right font-medium text-gray-700"
    //                   dir="rtl"
    //                 >
    //                   نام:
    //                 </label>
    //                 <input
    //                   type="tel"
    //                   id="name1"
    //                   name="name1"
    //                   value={formData.name1}
    //                   onChange={handleChange}
    //                   className={inputClass}
    //                 />
    //                 {errors.name1 && <ErrorMessage message={errors.name1} />}
    //               </div>
    //               <div className="mb-4">
    //                 <label htmlFor="name" className="block text-sm text-right font-medium text-gray-700" dir="rtl">
    //                   نام خانوادگی:
    //                 </label>
    //                 <input
    //                   type="text"
    //                   id="name"
    //                   name="name"
    //                   value={formData.name}
    //                   onChange={handleChange}
    //                   className={inputClass}
    //                 />
    //                 {errors.name && <ErrorMessage message={errors.name} />}
    //               </div>
    //               <div className={`mb-4 `}>
    //                 <label
    //                   htmlFor="phoneNumber"
    //                   className="block text-sm text-right font-medium text-gray-700"
    //                   dir="rtl"
    //                 >
    //                   شماره موبایل:
    //                 </label>
    //                 <input
    //                   type="tel"
    //                   id="phoneNumber"
    //                   name="phoneNumber"
    //                   value={formData.phoneNumber}
    //                   onChange={handleChange}
    //                   className={inputClass}
    //                 />
    //                 {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber} />}
    //               </div>
    //               <div className="mb-4">
    //                 <label htmlFor="age" className="block text-sm text-right font-medium text-gray-700" dir="rtl">
    //                   سن:
    //                 </label>
    //                 <input
    //                   type="text"
    //                   id="age"
    //                   name="age"
    //                   value={formData.age}
    //                   onChange={handleChange}
    //                   className={inputClass}
    //                 />
    //                 {errors.age && <ErrorMessage message={errors.age} />}
    //               </div>
    //               <button
    //                 type="submit"
    //                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
    //               >
    //                 ثبت نام
    //               </button>
    //             </form>
    //           )}
    //           <form className={`${step === 1 && !isSignUp ? '  ' : ' hidden '} `} onSubmit={handlePhoneSubmit}>
    //             <div className="mb-4">
    //               <label htmlFor="phoneNumber" className="block text-sm text-right font-medium text-gray-700">
    //                 شماره موبایل
    //               </label>
    //               <input
    //                 type="tel"
    //                 id="phoneNumber"
    //                 name="phoneNumber"
    //                 value={formData.phoneNumber}
    //                 onChange={handleChange}
    //                 className={inputClass}
    //               />
    //               {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber} />}
    //               {errors.submit && <ErrorMessage message={errors.submit} />}
    //             </div>

    //             <button
    //               type="submit"
    //               className="w-full cursor-pointer  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
    //             >
    //               دریافت کد تایید
    //             </button>
    //           </form>
    //           {step === 2 && (
    //             <form onSubmit={handleVerificationSubmit}>
    //               <div className="mb-4">
    //                 <label htmlFor="verificationCode" className="block text-sm text-right font-medium text-gray-700">
    //                   کد پیامک شده را وارد کنید
    //                 </label>
    //                 <input
    //                   type="text"
    //                   id="verificationCode"
    //                   name="verificationCode"
    //                   value={formData.verificationCode}
    //                   onChange={handleChange}
    //                   maxLength={6}
    //                   className={inputClass}
    //                 />
    //                 {errors.verificationCode && <ErrorMessage message={errors.verificationCode} />}
    //               </div>
    //               {countdown > 0 && (
    //                 <p className="block text-right text-xs text-cyan-600 mt-2"> {`${minutes}:${seconds}`} </p>
    //               )}
    //               <button
    //                 type="submit"
    //                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
    //                 disabled={countdown === 0 || loading}
    //               >
    //                 تایید
    //               </button>
    //             </form>
    //           )}

    //           <style jsx>{`
    //             .loader {
    //               border: 4px solid rgba(255, 255, 255, 0.3);
    //               border-radius: 50%;
    //               border-top: 4px solid #3498db;
    //               width: 40px;
    //               height: 40px;
    //               animation: spin 1s linear infinite;
    //             }

    //             @keyframes spin {
    //               0% {
    //                 transform: rotate(0deg);
    //               }
    //               100% {
    //                 transform: rotate(360deg);
    //               }
    //             }
    //           `}</style>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    // </div>
    <section className="gradient-form h-full dark:bg-neutral-700">
      <div>
        <div className="flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className=" bg-white  dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container*/}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-8">
                    {/*Logo*/}
                    <div className="text-center">
                      {/* <img className="mx-auto w-48" src="logoremovebg-preview.png" alt="MAVO" /> */}
                      <Image src={'/logoremovebg-preview.png'} width={250} height={2} alt="MAVO" className="mx-auto" />
                    </div>
                    <form>
                      {/*Username input*/}
                      <div className="relative mb-4 -mt-4" data-twe-input-wrapper-init="" dir="rtl">
                        <h3 className="text-sm mb-2 text-gray-600">نام:</h3>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded  border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="relative mb-4" data-twe-input-wrapper-init="" dir="rtl">
                        <h3 className="text-sm mb-2 text-gray-600">نام خانوادگی:</h3>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded  border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="relative mb-4" data-twe-input-wrapper-init="" dir="rtl">
                        <h3 className="text-sm mb-2 text-gray-600">شماره تماس:</h3>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded  border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      {/*Password input*/}
                      <div className="relative mb-4" data-twe-input-wrapper-init="" dir="rtl">
                        <h3 className="text-sm mb-2 text-gray-600">سن:</h3>
                        <input
                          type="password"
                          className="peer block min-h-[auto]  border w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                      </div>
                      {/*Submit button*/}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-8 mt-3 inline-block w-full rounded-lg px-6 pb-2 pt-2.5 text-base font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="button"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                          style={{
                            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}
                        >
                          ثبت نام
                        </button>
                      </div>
                      {/*Register button*/}
                      <div className="flex items-center justify-between pb-6"></div>
                    </form>
                  </div>
                </div>
                {/* Right column container with background and description*/}
                <div
                  className="flex items-center  lg:w-6/12 "
                  style={{
                    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12" dir="rtl">
                    <h4 className="mb-6 text-xl font-semibold">ما بیش از یک شرکت هستیم</h4>
                    <p className="text-base text-justify leading-loose">
                      ما تنها یک شرکت نیستیم، بلکه مجموعه‌ای از ایده‌ها، خلاقیت‌ها و نوآوری‌هایی هستیم که با همدلی،
                      همکاری و تلاش مستمر، مسیری نوین برای رشد و پیشرفت ترسیم می‌کنیم. ما با تکیه بر دانش، تجربه و روحیه
                      کار تیمی، فراتر از مرزهای یک کسب‌وکار گام برمی‌داریم و با ایجاد فرصت‌های جدید، آینده‌ای روشن‌تر را
                      برای خود و جامعه رقم می‌زنیم.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogIn
