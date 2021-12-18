import { CustomizationOptionType, Product, StoreInfo } from "../types";
import EbtesamCuisineHero from '../public/assets/header-ebtesam2.png'
import mansaf from '../public/assets/products-pics/mansaf.jpeg';

export const storeInfo: StoreInfo = {
  nameAr: 'ابتسام كوزين',
  nameEn: 'ُEbtesam Cuisine',
  shortcode: 'ebtesam-cuisine',
  description: 'إدارة الشيف / ابتسام المطوع - نتميز بالمأكولات الكويتية والفلسطينية و المقبلات والسلطات المعمول بأنواعة والكعك',
  heroImg: EbtesamCuisineHero,
  InstagramHandle: 'https://www.instagram.com/ebtesam_cuisine/',
  WhatsAppUri: 'https://api.whatsapp.com/send/?phone=96599622320&text&app_absent=0'
}

export const products: Product[] = [
  {
      id: 1,
      name: 'المنسف',
      description: "متسف بالطريقة الفلسطينية. تأتي مع صلصة اللبن و سلطة.",
      price: 26,
      imageSrc: mansaf,
      imageAlt: 'المنسف',
      productOptions: [
          {
              id: 1,
              optionName: "عدد الأشخاص",
              optionType: CustomizationOptionType.Radio,
              options: [
                  { id: 1, name: "4 أشخاص", priceIncrement: 26 },
                  { id: 2, name: "علبه نص كيلو", priceIncrement: 4 },
              ]
          }
      ]
  },
]