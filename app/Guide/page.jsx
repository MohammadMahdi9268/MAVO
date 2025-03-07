import Image from 'next/image'

export default function Guide(params) {
  return (
    <div className="bg-black text-white mt-24 text-center">
      <div className="text-3xl text-center font-bold p-8">
        <h3 className=" mt-8">چرا ماوو؟</h3>
        <h3 className="text-sm mt-5" dir="rtl">
          ویژگی هایی که باعث افزایش رضایت مخاطبین و همچنین ذینفعان سایت می شود.
        </h3>
      </div>
      <div className="flex  justify-center items-center mt-28 ml-48">
        <Image src={'/loading2.png'} width={300} height={3} alt="Loading" />
        <h3 className="w-[250px] text-sm mt-20 leading-loose text-start" dir="rtl">
          <h3 className="text-lg mb-2 ">سرعت لود بالا</h3>
          تضمین میانگین نمره بالای 75 از سایت معتبر GTmetrix این اطمینان را به شما می دهد که سایتی سبک و با سرعت لود
          سریع داشته باشید.
        </h3>
      </div>
      <div className="flex  justify-center items-center mt-28 ml-48">
        <h3 className="w-[250px] text-sm mt-20 leading-loose text-start" dir="rtl">
          <h3 className="text-base mb-2">سازگاری بادستگاه های مختلف</h3>
          ما نمایش صحیح صفحات وب سایت در تمام دستگاه ها استاندارد نظیر موبایل، تبلت، لپ تاپ و دسکتاپ را تضمین می کنیم.
        </h3>
        <Image src={'/responsive.png'} width={400} height={3} alt="responsive" />
      </div>
      <div className="flex  justify-center items-center mt-28 ml-48">
        <Image src={'/seo.jpg'} width={300} height={3} alt="seo" className="rounded-2xl" />
        <h3 className="w-[250px] text-sm  leading-loose text-start" dir="rtl">
          <h3 className="text-base mb-2">بهینه برای موتور های جستجو</h3>
          امروزه طراحی وب سایت بدون رعایت کردن اصول سئو سایت بی‌معنی است. سایت های طراحی شده در ایزی وب با استانداردهای
          موتورهای جستجو هماهنگ هستند.
        </h3>
      </div>
      <div className="flex  justify-center items-center mt-28 ml-48">
        <h3 className="w-[250px] text-sm  leading-loose text-start" dir="rtl">
          <h3 className="text-lg mb-2">مدیریت آسان</h3>
          پنل مدیریت آسان وب سایت به شما کمک می کند تا با 4 ساعت آموزش بتوانید وب سایت را بدون دانش برنامه نویسی مدیریت
          و محتوای آن را به‌روز کنید.
        </h3>
        <Image src={'/Easy management.jpg'} width={300} height={3} alt="Easy management" />
      </div>
    </div>
  )
}
