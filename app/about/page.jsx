import Image from 'next/image'

function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mt-20 flex justify-end px-20">
          <Image src={'/1.png'} width={650} height={2} alt="introduction" className="mt-16 mr-16" />
          <div className="text-3xl text-black mt-36 text-end">
            <h3>معرفی شرکت ماوو </h3>
            <h3 className="text-base text-justify  mt-7 w-[630px]  leading-loose text-gray-700" dir="rtl">
              شرکت داده آسان ایرانیان (ایزی وب) فعالیت خود را از فروردین سال ١٣٩٣ با هدف طراحی و تولید نرم‌افزارهای تحت
              وب و ارائه راهکارهای کارآمد در این حوزه آغاز نموده است. به‌کارگیری نیروی متخصص، احترام به مشتری و تحویل به
              موقع و با کیفیت کارها، ارزش‌های شرکت داده آسان است؛ ارزش‌هایی که باعث شده شرکت‌های نام آشنا و سازمان‌های
              بزرگ به سرعت به لیست کارفرمایان شرکت داده آسان ایرانیان اضافه شده و برای طولانی مدت به این شرکت وفادار
              بمانند. ارائه خدمات مشاوره به‌روز و دقیق و پاسخگویی درست به نیازهای مشتریان، ما را به عنوان گزینه‌ای قابل
              اعتماد نزد ایشان مطرح نموده است.{' '}
              <div className="flex justify-start mt-8">
                <a href="/AboutUS">
                  <button className="bg-blue-600 hover:bg-blue-800 rounded-lg text-white transition-all duration-700 py-3 px-8">
                    ادامه مطالب
                  </button>
                </a>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
