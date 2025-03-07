'use client'
import { useState } from 'react'
import ContactusForm from '../Contactus/ContactusForm/page'
import Comment from '../components/comment/Comment'
import Footer from '../components/Footer/page'
const faqs = [
  {
    category: 'خرید سایت',
    questions: [
      {
        q: 'چطور یک سایت آماده خریداری کنم؟',
        a: 'برای خرید، ابتدا سایت موردنظر را انتخاب کنید و روی دکمه خرید کلیک کنید.',
      },
      {
        q: 'آیا می‌توانم قبل از خرید، پیش‌نمایش سایت را ببینم؟',
        a: 'بله، برای هر سایت یک پیش‌نمایش زنده وجود دارد که می‌توانید مشاهده کنید.',
      },
      {
        q: 'آیا بعد از خرید سایت، امکان ویرایش و تغییرات وجود دارد؟',
        a: 'بله، شما می‌توانید متن‌ها، تصاویر، رنگ‌بندی و برخی امکانات سایت را تغییر دهید. همچنین در صورت نیاز، می‌توانیم تغییرات اختصاصی برای شما انجام دهیم.',
      },
      {
        q: ' چه نوع سایت‌هایی برای فروش دارید؟',
        a: 'ما انواع سایت‌های فروشگاهی، شرکتی، شخصی، خبری، آموزشی و ... را ارائه می‌دهیم. می‌توانید بر اساس نیاز خود، گزینه مناسب را انتخاب کنید.',
      },
      {
        q: 'آیا سایت‌ها دارای دامنه و هاست هستند یا باید جداگانه تهیه کنیم؟',
        a: 'بعضی از سایت‌ها همراه با دامنه و هاست ارائه می‌شوند، اما در برخی موارد باید دامنه و هاست را جداگانه خریداری کنید. هنگام خرید، جزئیات هر سایت مشخص شده است.',
      },
      {
        q: ' آیا امکان سفارش طراحی سایت اختصاصی وجود دارد؟',
        a: 'بله، اگر نیاز به سایتی با طراحی و امکانات کاملاً سفارشی دارید، می‌توانید از خدمات طراحی اختصاصی ما استفاده کنید.',
      },
    ],
  },
  {
    category: 'سوالات مربوط به خرید و پرداخت',
    questions: [
      {
        q: 'روش‌های پرداخت چگونه است؟',
        a: 'شما می‌توانید از طریق درگاه‌های پرداخت آنلاین، مبلغ سفارش خود را پرداخت کنید. همچنین برای برخی سایت‌ها، امکان پرداخت اقساطی نیز وجود دارد.',
      },
      {
        q: 'آیا امکان بازگشت وجه در صورت نارضایتی وجود دارد؟',
        a: 'بله، اگر سایت مطابق توضیحات ارائه شده نباشد یا مشکلات جدی داشته باشد، می‌توانید طبق قوانین سایت درخواست بازگشت وجه بدهید.',
      },
      {
        q: 'آیا امکان پرداخت قسطی برای خرید سایت وجود دارد؟',
        a: 'بله، برای برخی سایت‌ها شرایط پرداخت اقساطی در نظر گرفته شده است. برای اطلاعات بیشتر، لطفاً با پشتیبانی تماس بگیرید.',
      },
    ],
  },
  {
    category: 'سوالات مربوط به پشتیبانی و خدمات پس از فروش',
    questions: [
      {
        q: 'آیا بعد از خرید، پشتیبانی رایگان ارائه می‌شود؟',
        a: 'بله، تمامی سایت‌های ما دارای پشتیبانی رایگان برای مدت 1 تا 2 ماه هستند. جزئیات پشتیبانی هر محصول در صفحه آن ذکر شده است.',
      },
      {
        q: 'مدت‌زمان پشتیبانی چقدر است و شامل چه مواردی می‌شود؟',
        a: 'مدت پشتیبانی بسته به نوع سایت متفاوت است. معمولاً 1 تا 2 ماه پشتیبانی رایگان ارائه می‌شود که شامل حل مشکلات فنی و راهنمایی برای مدیریت سایت است.',
      },
      {
        q: 'اگر مشکلی در سایت پیش بیاید، چگونه می‌توانم با پشتیبانی ارتباط بگیرم؟',
        a: 'می‌توانید از طریق تیکت پشتیبانی، ایمیل یا شماره تماس با تیم ما در ارتباط باشید. ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهیم بود.',
      },
      {
        q: 'آیا امکان ارتقا و افزودن امکانات جدید به سایت وجود دارد؟',
        a: 'بله، اگر نیاز به اضافه کردن امکانات خاصی دارید، تیم ما می‌تواند آن را برای شما انجام دهد. برای دریافت مشاوره، لطفاً با ما تماس بگیرید.',
      },
    ],
  },
  {
    category: 'سوالات فنی',
    questions: [
      {
        q: ' آیا می‌توانم قالب و افزونه‌های سایت را تغییر دهم؟',
        a: 'بله، شما می‌توانید قالب و افزونه‌های سایت را تغییر دهید. با این حال، برخی تغییرات ممکن است نیاز به دانش فنی داشته باشد.',
      },
      {
        q: 'آیا سایت‌ها به‌صورت ریسپانسیو (واکنش‌ گرا) طراحی شده‌اند؟',
        a: 'بله، تمامی سایت‌های ما کاملاً ریسپانسیو هستند و در موبایل، تبلت و دسکتاپ به درستی نمایش داده می‌شوند.',
      },
      {
        q: 'آیا امکان اتصال سایت به درگاه پرداخت بانکی وجود دارد؟',
        a: 'بله، سایت‌های فروشگاهی ما از درگاه‌های پرداخت ایرانی مانند زرین‌پال، آی‌دی‌پی، سداد و ... پشتیبانی می‌کنند.',
      },
      {
        q: 'آیا سایت‌های شما دارای امنیت کافی هستند؟',
        a: 'بله، تمامی سایت‌های ما دارای استانداردهای امنیتی بالا هستند و از گواهی SSL، فایروال و بروزرسانی‌های امنیتی بهره می‌برند.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [hiddenChange, setHiddenChange] = useState(true)
  const [updateError, setUpdateError] = useState(null)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [code, setCode] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setUpdateLoading(true)
    setUpdateError(null)

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/updateMe`,
        {
          name,
          age,
          code,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('login')}`,
          },
        }
      )

      if (response.status !== 200) {
        throw new Error('Failed to update user information')
      }

      const updatedUser = response.data
      console.log(updatedUser) // Log the response to check its structure
      setHiddenChange(true)
      if (updatedUser.name && updatedUser.age) {
        setUser(updatedUser) // Call the parent function to update user info
        setName(updatedUser.name)
        setAge(updatedUser.age)
        setCode(updatedUser.code)
      } else if (updatedUser.data && updatedUser.data.user) {
        setUser(updatedUser.data.user) // Call the parent function to update user info
        setName(updatedUser.data.user.name)
        setAge(updatedUser.data.user.age)
        setAge(updatedUser.data.user.code)
      } else {
        throw new Error('Invalid response structure')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setUpdateError(error.message)
      } else {
        setUpdateError('An unknown error occurred')
      }
      showToast('warning', `${error.message || 'مشکلی پیش امده اینترنت خود را بررسی کنید'}`)
    } finally {
      setUpdateLoading(false)
    }
  }

  return (
    <>
      <div className="bg-black text-white min-h-screen p-12">
        <div className="max-w-3xl mx-auto text-center mt-10">
          <h2 className="text-4xl font-bold mb-5 mt-7 text-white">سوالات متداول</h2>
          <p className="text-gray-300 mb-6">پاسخ سوالات پرتکرار درباره خرید و انتقال سایت را اینجا ببینید</p>
        </div>

        <div className="max-w-4xl mx-auto" dir="rtl">
          {faqs.map((section, sectionIdx) => (
            <card key={sectionIdx} className="mb-6 bg-gray-900">
              <cardcontent>
                <h3 className="text-xl font-semibold text-[#85BB65] mt-12">{section.category}</h3>
                {section.questions.map((faq, idx) => {
                  const isOpen = openIndex === `${sectionIdx}-${idx}`
                  return (
                    <div key={idx} className="border-b border-gray-500 py-5">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => setOpenIndex(isOpen ? null : `${sectionIdx}-${idx}`)}
                      >
                        <span className="text-white">{faq.q}</span>
                        <chevrondown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && <p className="mt-4 text-gray-300">{faq.a}</p>}
                    </div>
                  )
                })}
              </cardcontent>
            </card>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-white mb-4 text-3xl">سوال شما در لیست نیست؟</p>
          <p className="text-base mb-3 text-gray-300" dir="rtl">
            "سوالی که دنبالش هستید رو پیدا نکردید؟ از ما بپرسید!"
          </p>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white flex items-center px-5 py-4 rounded-lg transition-all duration-700"
              onClick={() => setHiddenChange(!hiddenChange)}
            >
              پرسش سوالات
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ml-2 ${hiddenChange ? 'rotate-180' : ''} transition-all duration-500`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
          {!hiddenChange && (
            <div className="ml-96">
              <div className="mt-6 p-4 max-w-2xl  border border-gray-300 rounded-lg bg-white shadow-md animate__animated animate__fadeInUp">
                <h2 className="text-2xl font-semibold mb-3 mt-5 text-black">سوال خود را بپرسید</h2>
                {updateError && <p className="text-red-500">{updateError}</p>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-3 text-black text-start text-sm font-semibold" dir="rtl">
                      سوال خود را بنویسید:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-gray-300 p-3 text-right text-black rounded w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-center mb-2">
                    <button className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg transition-all duration-700 px-5 py-3">
                      ارسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white py-14">
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-2xl" dir="rtl">
            سوالی دارید؟ ما اینجاییم تا کمک کنیم!
          </h3>
          <p className="text-balance mt-3">
            اگر پاسخ سوال خود را پیدا نکردید، تیم پشتیبانی ما آماده‌ی پاسخگویی به شماست
          </p>
          <a href="/Contactus">
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500 rounded-lg px-6 mt-5 py-3"
              dir="rtl"
            >
              "اگر سوالی دارید، همین حالا با ما در تماس باشید!"
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
