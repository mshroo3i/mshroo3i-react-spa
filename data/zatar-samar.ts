import { Product, CustomizationOptionType, StoreInfo } from "../types";
import ZatarSamarHero from '../public/assets/header-zatar.jpeg'

const zatarImage = '/assets/products-pics/zatar-2.jpeg';
const do2aImage = '/assets/products-pics/do2a-2.jpeg';
const zaytoonMixImg = '/assets/products-pics/zaytoon-mix-1.jpeg';
const magdoosImage = '/assets/products-pics/magdoos-1.jpeg';
const simsimiaImage = '/assets/products-pics/simsimya-2.jpeg';

export const storeInfo: StoreInfo = {
    storeNameAr: 'زعتر سمر',
    storeDescriptionAr: 'مشروع كويتي - زعتر أصلي درجة أولى - دُقة (زعتر أحمر) أجود أنواع الزعتر الفلسطيني',
    heroImage: ZatarSamarHero,
    instagramLink: 'https://www.instagram.com/zatarsamar/',
    whatsappLink: 'https://wa.me/96565544219'
  }

export const products: Product[] = [
    {
        id: 1,
        name: 'زعتر فاخر فلسطيني',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: 2,
        imageSrc: zatarImage,
        imageAlt: 'زعتر فاخر فلسطيني',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: 2},
                    { id: 2, text: "علبه نص كيلو", price: 4},
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'زعتر ممتاز فلسطيني',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: 1.5,
        imageSrc: zatarImage,
        imageAlt: 'زعتر ممتاز فلسطيني',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: 1.5},
                    { id: 2, text: "علبه نص كيلو", price: 3},
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'دقه فلسطينيه زعتر احمر',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: 1.5,
        imageSrc: do2aImage,
        imageAlt: 'دقه فلسطينيه زعتر احمر',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: 1.5},
                    { id: 2, text: "علبه نص كيلو", price: 3},
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'زيت زيتون فلسطيني عصره اولى',
        description: "متوفر باللتر",
        price: 6,
        imageSrc: null,
        imageAlt: 'زيت زيتون فلسطيني عصره اولى',
        options: []
    },
    {
        id: 5,
        name: 'زيت تركي درجه اولى',
        description: "متوفر باللتر",
        price: 3,
        imageSrc: null,
        imageAlt: 'زيت تركي درجه اولى',
        options: []
    },
    {
        id: 6,
        name: 'زيتون بالخلطه',
        description: "نص كيلو",
        price: 2,
        imageSrc: zaytoonMixImg,
        imageAlt: 'زيتون بالخلطه',
        options: []
    },
    {
        id: 8,
        name: 'مقدوس حبه صغيره قرشة اقل من نص',
        description: "",
        price: 2.5,
        imageSrc: magdoosImage,
        imageAlt: 'مقدوس حبه صغيره قرشة اقل من نص',
        options: []
    },
    {
        id: 9,
        name: 'سماق اردني درجه اولى',
        description: "متوفر ربع كيلو أو نص كيلو",
        price: 1.25,
        imageSrc: null,
        imageAlt: 'سماق ادرني درجه اولى',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: 1.25},
                    { id: 2, text: "علبه نص كيلو", price: 2.5},
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'سمسميه اردنيه مغلفه',
        description: "متوفر ربع كيلو أو نص كيلو",
        price: 1.5,
        imageSrc: simsimiaImage,
        imageAlt: 'سمسميه اردنيه مغلفه',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: 1.5},
                    { id: 2, text: "علبه نص كيلو", price: 3},
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'مرميه',
        description: "متوفر ربع كيلو أو نص كيلو",
        price: 1.25,
        imageSrc: null,
        imageAlt: 'مرميه',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: 1.25},
                    { id: 2, text: "علبه نص كيلو", price: 2.5},
                ]
            }
        ]
    },
]