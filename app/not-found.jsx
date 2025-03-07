import Link from 'next/link'

function NotFound() {
  return (
    <main className="grid min-h-full place-items-center mt-36 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-balance text-5xl   text-gray-900 sm:text-4xl">صفحه یافت نشد</h1>
        <p className="mt-6 text-pretty text-lg font-bold text-gray-500 sm:text-xl/8" dir="rtl">
          متأسفیم، ما نتوانستیم صفحه مورد نظر شما را پیدا کنیم.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            صفحه اصلی
            <span aria-hidden="true" className="ml-2 font-bold">
              →
            </span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default NotFound
