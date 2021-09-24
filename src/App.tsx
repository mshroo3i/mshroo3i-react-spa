/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { InstagramIcon } from './assets/instagram'
import { WhatsAppIcon } from './assets/WhatsappIcon'
import ZatarHeaderImage from './assets/header-zatar.jpeg'
import LeafLogo from './assets/leaf-logo.png'
import { Boom } from './boom'
import { Footer } from './Footer'
import { Banner } from './Banner'


export default function Example() {

  return (
    <div className="bg-white">
      <header className="relative z-10">
        <nav aria-label="Top">

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="lg:flex lg:items-center">
                    <a href="/">
                      <span className="sr-only">ZatarSamar</span>
                      <img
                        className="h-8 w-auto"
                        src={LeafLogo}
                        alt=""
                      />
                    </a>
                  </div>

                  {/* <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flow-root">
                        <a href="/" className="group -m-2 p-2 flex items-center">
                          <ShoppingCartIcon
                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 ">
          <div className="relative ">

            <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-white lg:block" />

            <div className="w-full h-52 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
              <img
                src={ZatarHeaderImage}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>

            <div className="relative bg-white lg:bg-transparent text-right">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-2xl mx-auto py-5 lg:py-32 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900">
                      زعتر سمر
                    </h1>
                    <div className="text-xs sm:text-base lg:mt-4 space-x-6 flex justify-end">
                        <a
                          href="https://www.instagram.com/zatarsamar/"
                          className="text-gray-400 hover:text-gray-500 group flex items-center px-2 py-2 font-medium"
                          target="_blank" rel="noopener noreferrer"
                        >
                          <InstagramIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                          ZatarSamar
                        </a>
                        <a href="https://wa.me/96565544219"
                        className="text-gray-400 hover:text-gray-500 group flex items-center px-2 py-2 font-medium"
                        target="_blank" rel="noopener noreferrer"
                        >
                          <WhatsAppIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                          wa.me/96565544219
                        </a>
                    </div>
                    <hr className="mt-4 hidden lg:block" />
                    <p className="mt-4 text-sm sm:text-xl text-gray-600">
                    مشروع كويتي - زعتر أصلي درجة أولى - دُقة (زعتر أحمر) أجود أنواع الزعتر الفلسطيني
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Products */}
        <section aria-labelledby="trending-heading" className="">
          <div className="text-right pt-8  sm:py-9 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="pb-4 px-4 flex items-center justify-end sm:px-6 lg:px-0">
              <h2 id="trending-heading" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                منتجاتنا
              </h2>
            </div>

            <Boom />
            <div className="mt-8 relative">
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>

      <Banner></Banner>

      {/* <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200">

            <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
              <div className="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                <div className="max-w-sm mx-auto">
                  <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    The latest news, articles, and resources, sent to your inbox weekly.
                  </p>
                  <form className="mt-4 sm:mt-6 sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      type="text"
                      autoComplete="email"
                      required
                      className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                    alt=""
                    className="w-full h-full filter saturate-0 object-center object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-90" />
                </div>
                <div className="relative max-w-sm mx-auto text-center">
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">Get early access</h3>
                  <p className="mt-2 text-gray-200">
                    Did you sign up to the newsletter? If so, use the keyword we sent you to get access.{' '}
                    <a href="#" className="font-bold text-white whitespace-nowrap hover:text-gray-200">
                      Go now<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                {footerNavigation.bottomLinks.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="ml-6 border-l border-gray-200 pl-6">
                <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto flex-shrink-0"
                  />
                  <span className="ml-3 text-sm">Change</span>
                  <span className="sr-only">location and currency</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
