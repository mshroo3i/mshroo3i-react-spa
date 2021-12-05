import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function Hero() {
  return (
    <div className="relative overflow-hidden mt-14 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-28 rtl">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
          <h1>
            <span className="mt-1 block text-3xl tracking-wide leading-10 font-extrabold xl:text-4xl">
              <span className="block text-gray-900">لن تحتاج إلى مبرمج لإنشاء متجرك الالكتروني</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          خلال خطوات بسيطة فقط وسيكون متجرك الإلكتروني جاهزًا. استقبل طلباتك ببساطة عن طريق وسيلة تواصل اجتماعي كالواتساب.
          </p>
          <div className="sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div className="mt-3 sm:flex justify-center lg:justify-start">
              <a
                href=""
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Notify me
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div
              className="relative block w-full bg-white rounded-lg overflow-hidden"
            >
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
