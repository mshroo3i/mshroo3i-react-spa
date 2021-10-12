import { InstagramIcon } from '../instagram'
import { WhatsAppIcon } from '../WhatsappIcon'


export const Hero = () => (
  <div className="flex flex-col border-b border-gray-200 ">
    <div className="relative ">

      <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-white lg:block" />

      <div className="w-full h-52 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
        <div className="relative w-full h-full">
        <img
          src="/assets/header-zatar.jpeg"
          className="w-full h-full object-center object-cover"
          // height={144}
          // width={144}
          alt=""
        />
        </div>
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
                  className="text-green-400 hover:text-green-500 group flex items-center px-2 py-2 font-medium"
                  target="_blank" rel="noopener noreferrer"
                >
                  <InstagramIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  ZatarSamar
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
              <p className="mt-4 text-sm sm:text-xl text-gray-600">
                مشروع كويتي - زعتر أصلي درجة أولى - دُقة (زعتر أحمر) أجود أنواع الزعتر الفلسطيني
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

);