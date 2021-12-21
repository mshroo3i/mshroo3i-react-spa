import Image from 'next/image';
import { InstagramColoredIcon } from '../svg/InstagramColor';
import { WhatsAppColoredIcon } from '../svg/WhatsappColored';
import { StoreInfo } from '../../types';
import { getImagePathForHero } from '../../lib/imagePath';

export function StoreHero({ storeInfo }: { storeInfo: StoreInfo}) {
  return (
    <div className="relative overflow-hidden mt-6 mx-auto max-w-7xl px-4  lg:mt-28">
      <div className="grid lg:grid-cols-12 lg:gap-8">
        <div className="mt-4 lg:mt-0 order-last lg:order-first  md:max-w-2xl lg:col-span-6 lg:text-right">
          <h1>
            <span className="mt-1 block text-3xl leading-10 font-extrabold xl:text-4xl">
              <span className="block text-gray-900">{storeInfo.nameAr}</span>
            </span>
          </h1>
          <div className="text-xs sm:text-base my-2 lg:my-4 space-x-2 space-x-reverse flex justify-start">
            <a
              href={storeInfo.InstagramHandle}
              className="text-customred-400 hover:text-customred-500 group flex items-center py-2 font-medium"
              target="_blank" rel="noopener noreferrer"
            >
              <InstagramColoredIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href={storeInfo.WhatsAppUri}
              className="text-customred-400 hover:text-customred-500 group flex items-center py-2 font-medium"
              target="_blank" rel="noopener noreferrer"
            >
              <WhatsAppColoredIcon className="mr-1 flex-shrink-0 h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <hr className="mt-4 hidden lg:block" />
          <p className="mt-0 lg:mt-4 text-sm sm:text-xl text-gray-600">
            {storeInfo.description}
          </p>
        </div>
        <div className="relative sm:max-w-lg lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div
              className="w-full h-52 sm:h-64 relative block bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={getImagePathForHero(storeInfo.heroImg as string)}
                objectFit='cover'
                layout='fill'
                alt={`${storeInfo.nameAr} - ${storeInfo.description}`}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}