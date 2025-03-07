'use client'

export default function ContactusForm(params) {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-6">
          <div class="lg:w-1/2 lg:mx-6 pr-8 mb-32 pl-24">
            <h1
              class="text-xl font-semibold text-gray-800 capitalize dark:text-white text-justify lg:text-2xl"
              dir="rtl"
            >
              "لطفاً سوالات خود را با دقت وارد کنید تا بتوانیم بهترین پاسخ را ارائه دهیم."{' '}
            </h1>
            <h3 dir="rtl" className="mt-7 leading-loose">
              ما اینجا هستیم تا به شما کمک کنیم و بهترین پاسخ‌ها را ارائه دهیم. نگران نباشید، هیچ سوالی بی‌جواب
              نمی‌ماند. پس با خیال راحت سوالات خود را مطرح کنید و از همراهی ما لذت ببرید.
            </h3>
          </div>

          <div class="mt-8 lg:w-1/2 lg:mx-6">
            <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 class="text-lg font-medium text-gray-700 text-center" dir="rtl">
                سوالی دارید؟ از ما بپرسید.
              </h1>

              <form class="mt-6">
                <div class="flex-1">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200" dir="rtl">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    dir="rtl"
                  />
                </div>

                <div class="flex-1 mt-6">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200" dir="rtl">
                    ایمیل:
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    dir="rtl"
                  />
                </div>

                <div class="w-full mt-6">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200" dir="rtl">
                    پیام:
                  </label>
                  <textarea
                    class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="پیام خود را برای ما بنویسید"
                    dir="rtl"
                  ></textarea>
                </div>

                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  ارسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
