import Image from 'next/image';
import Link from 'next/link';
import { getImagePathForHero } from '../../lib/imagePath';
import { StoreInfo } from "../../types"

/* This example requires Tailwind CSS v2.0+ */
const stores: StoreInfo[] = [
  {
    "nameEn": "Zatar Samar",
    "nameAr": "زعتر سمر",
    "description": "مشروع كويتي - زعتر أصلي درجة أولى - دُقة (زعتر أحمر) أجود أنواع الزعتر الفلسطيني",
    "shortcode": "zatar-samar",
    "heroImg": "/assets/header-zatar.jpeg",
    "instagramHandle": "zatarsamar",
    "whatsAppUri": "https://wa.me/96565544219",
    "products": [],
  },
]

export function StoresShowcase() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">أحدث المشاريع</h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-6 md:gap-y-0 lg:gap-x-8">
          {stores.map((store) => (
            <div key={store.shortcode} className="group relative">
              <div className="relative shadow-lg w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 h-36">
                <Image
                  src={getImagePathForHero(store.heroImg as string)}
                  objectFit='cover'
                  layout='fill'
                  alt={store.nameAr}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <Link href={`/${store.shortcode}`}>
                  <a>
                    <span className="absolute inset-0" />
                    {store.nameAr}
                  </a>
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{store.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
