import Link from 'next/link'
import Image from 'next/image'

import HeroImage from '../../public/assets/hero.png'


export function Hero(props: { title: string, subtitle }) {
  return (
    <div className="relative overflow-hidden mt-14 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-28">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
          <h1>
            <span className="mt-1 block text-3xl leading-10 font-extrabold xl:text-4xl">
              <span className="block text-gray-900">{props.title}</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {props.subtitle}
          </p>
          <div className="sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div className="mt-5 sm:mt-3 sm:flex justify-center lg:justify-start">
              <Link href="/sign-up">
              <a
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                انشأ مشروعك مجانا
              </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div
              className="relative block w-full bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={HeroImage}
                alt="استقبل طلباتك ببساطة عن طريق وسيلة تواصل اجتماعي كالواتساب."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
