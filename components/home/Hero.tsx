import Link from 'next/link'
import { title } from 'process'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">

      <div className="relative pb-16 sm:pb-24">
        <main className=" mx-auto max-w-7xl px-4 ">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">أهلا بكم في</span>{' '}
              <span className="block text-green-600 xl:inline">مشروعي</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              انشأ مترجك الالكتروني لمشروعك بسهولة مع الحفاظ على الجانب الاجتماعي
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href={`/sign-up`}>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  انشأ مشروعك الآن
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/zatar-samar">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                اطلع على مثال
                </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
