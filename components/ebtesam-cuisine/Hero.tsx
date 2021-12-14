import Image from 'next/image';
import { InstagramIcon } from '../instagram'
import { WhatsAppIcon } from '../svg/WhatsappIcon'
import ZatarSamarHero from '../../public/assets/header-zatar.jpeg'
import { InstagramColoredIcon } from '../svg/InstagramColor';
import { WhatsAppColoredIcon } from '../svg/WhatsappColored';

export function Hero() {
  return (
    <div className="relative overflow-hidden mt-6 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-28">
      <div className="grid lg:grid-cols-12 lg:gap-8">
        <div className="mt-4 lg:mt-0 order-last lg:order-first sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
          <h1>
            <span className="mt-1 block text-3xl leading-10 font-extrabold xl:text-4xl">
              <span className="block text-gray-900">ابتسام كوزين</span>
            </span>
          </h1>
          <div className="text-xs sm:text-base my-2 lg:my-4 space-x-2 space-x-reverse flex justify-start">
            <a
              href="https://www.instagram.com/zatarsamar/"
              className="text-customred-400 hover:text-customred-500 group flex items-center py-2 font-medium"
              target="_blank" rel="noopener noreferrer"
            >
              <InstagramColoredIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/96565544219"
              className="text-customred-400 hover:text-customred-500 group flex items-center py-2 font-medium"
              target="_blank" rel="noopener noreferrer"
            >
              <WhatsAppColoredIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
            </a>
            {/* <a href="https://wa.me/96565544219"
                  className="text-green-400 hover:text-green-500 group flex items-center px-2 py-2 font-medium"
                  target="_blank" rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  wa.me/96565544219
                </a> */}
          </div>
          <hr className="mt-4 hidden lg:block" />
          <p className="mt-0 lg:mt-4 text-sm sm:text-xl text-gray-600">
            مشروع كويتي - زعتر أصلي درجة أولى - دُقة (زعتر أحمر) أجود أنواع الزعتر الفلسطيني
          </p>
        </div>
        <div className="relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div
              className="w-full h-52 sm:h-64 relative block bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={ZatarSamarHero}
                className='object-center object-cover'
                alt="زعتر سمر - مشروع كويتي - زعتر أصلي درجة أولى - دُقة (زعتر أحمر) أجود أنواع الزعتر الفلسطيني"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}