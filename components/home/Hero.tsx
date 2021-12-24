import Image from 'next/image'
import { getImagePathForHero } from '../../lib/imagePath'

export function Hero(props: { title: string, subtitle }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 relative overflow-hidden mt-14 sm:mt-24 mx-auto px-4 sm:px-6 lg:mt-28">  
        <div className="mb-6 lg:mb-0 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
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
              <a
                href="https://kturqc0z67s.typeform.com/to/MZwt9vwe" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                انشأ مشروعك مجانا
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:mt-0  col-span-6 flex items-center">
          <div className="relative w-full h-56 sm:h-72 mx-auto rounded-lg">
            <Image
                src={getImagePathForHero('/assets/hero.png')}
                objectFit='contain'
                layout='fill'
                alt="استقبل طلباتك ببساطة عن طريق وسيلة تواصل اجتماعي كالواتساب."
                priority
              />
          </div>
        </div>
    </div>
  )
}
