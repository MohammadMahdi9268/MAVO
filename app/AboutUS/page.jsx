import Image from 'next/image'
import Comment from '../components/comment/Comment'
import Footer from '../components/Footer/page'

export default function AboutUS(params) {
  return (
    <>
      <div className="bg-black text-white grid-cols-2 grid p-20" dir="rtl">
        <div className="flex justify-end ml-10">
          <Image
            src={'/Screenshot__177_-removebg-preview_LE_upscale_balanced_x4.jpg'}
            width={690}
            height={200}
            alt="vectores"
          />
        </div>
        <div className="text-center flex-col flex justify-center ml-11">
          <h3 className="text-5xl text-center text-white mb-10">درباره ما</h3>
          <h3 className="text-white text-lg" dir="rtl">
            با تیم پشت حرکت آشنا شوید! کمی در مورد آنچه هستیم و انجام می دهیم.
          </h3>
        </div>
      </div>

      <div className="bg-white text-black flex justify-center flex-col items-center font-bold mt-16">
        <div>
          <h3 className="mb-10 text-4xl">تیم متخصص ما</h3>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="block max-w-[18rem] border-2  rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
            </div>
            <div className="p-6">
              <p className="text-base">Mohammad Mahdi Qarqany</p>
            </div>
          </div>

          <div className="block max-w-[18rem] border-2  rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg" alt="" />
            </div>
            <div className="p-6">
              <p className="text-base">Mahdi Nory</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full dark:bg-gray-200 flex justify-center mt-20 items-center bg-black text-white">
        <div
          className="h-screen lg:h-auto overflow-hidden w-full mx-auto py-20 mt-14 px-4 text-center xl:px-16 xs:px-8 grid sm:flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4"
          dir="rtl"
        >
          <div className="w-full flex justify-center items-center mt-10">
            <div className="relative lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] sm:h-[400px] sm:w-[200px] h-[300px] w-[200px]">
              <div className="flex justify-center">
                <Image className="  mt-0" src="/Aboutpage2.png" alt="vectores" width={900} height={20} />
              </div>
            </div>
          </div>
          <div className="w-full flex  flex-col justify-center sm:gap-7 ml-8 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
            <h3 className="text-green-700 text-lg text-start">درباره ما</h3>
            <h1 className="sm:text-4xl text-2xl mb-5 font-family-semibold text-start">ما کی هستیم؟</h1>

            <p
              className="text-sm sm:text-lg font-family-light leading-loose text-justify  text-white font-bold mx-auto max-w-4xl"
              dir="rtl"
            >
              ما در ایزی وب، به لطف سال ها فعالیت در حوزه فن‌آوری و همکاری با صدها شرکت و سازمان سطح یک کشور، با دغدغه
              کارفرمایان خود آشنا شده‌ایم و برای پاسخگویی درست به نیاز مشتریان به یک راهکار آسان، امن و زیبا در زمینه
              طراحی وب سایت و تولید سامانه‌های سفارشی رسیده‌ایم. جهت دریافت مشاوره رایگان، هم اکنون با ما تماس باشید.
            </p>
          </div>
        </div>
      </div>
      <div className=" dark:bg-gray-200 flex justify-center items-center bg-black text-white">
        <div className="h-screen lg:h-auto overflow-hidden w-full mx-auto  mt-5 px-4 text-center xl:px-16 xs:px-8 grid sm:flex md:flex-row xs:flex-col gap-4 justify-center items-center ">
          <div className="w-full flex justify-center items-center mt-10">
            <div className="relative lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] sm:h-[400px] sm:w-[200px] h-[300px] w-[200px]">
              <div className="flex justify-center mt-24">
                <Image className="  mt-0" src="/Aboutpage3.png" alt="vectores" width={900} height={20} />
              </div>
            </div>
          </div>
          <div className="w-full flex  flex-col justify-center sm:gap-7 mr-14 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
            <h3 className="text-green-600 text-lg text-end">درباره ما</h3>
            <h1 className="sm:text-4xl text-2xl mb-5 font-family-semibold text-start" dir="rtl">
              کاری که ما انجام می دهیم!
            </h1>

            <p
              className=" text-sm sm:text-lg font-family-light leading-7 text-justify  text-white font-bold   mx-auto max-w-4xl"
              dir="rtl"
            >
              ما در هنگام فروش سایت شما و همچنین خرید یک فرآیند استاندارد ساده ارائه می دهیم و هنگام خرید و فروش سایت ها
              ، آن را آسانتر ، کارآمدتر و قابل اطمینان تر می کنیم.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
