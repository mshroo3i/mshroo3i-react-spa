import zatarImage from '../assets/products-pics/zatar-2.jpeg';
import do2aImage from '../assets/products-pics/do2a-2.jpeg';
import zaytoonMixImg from '../assets/products-pics/zaytoon-mix-1.jpeg';
import magdoosImage from '../assets/products-pics/magdoos-1.jpeg';
import simsimiaImage from '../assets/products-pics/simsimya-2.jpeg';

export interface Product {
    id: number
    name: string
    description: string
    price: string
    imageSrc: string | null
    imageAlt: string
}


export const products: Product[] = [
    {
        id: 1,
        name: 'زعتر فاخر فلسطيني',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: '+‏٢٫٠٠٠ د.ك',
        imageSrc: zatarImage,
        imageAlt: 'زعتر فاخر فلسطيني',
    },
    {
        id: 2,
        name: 'زعتر ممتاز فلسطيني',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: '+‏١٫٥٠٠ د.ك',
        imageSrc: zatarImage,
        imageAlt: 'زعتر ممتاز فلسطيني',
    },
    {
        id: 3,
        name: 'دقه فلسطينيه زعتر احمر',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: '+‏١٫٥٠٠ د.ك',
        imageSrc: do2aImage,
        imageAlt: 'دقه فلسطينيه زعتر احمر',
    },
    {
        id: 4,
        name: 'زيت زيتون فلسطيني عصره اولى',
        description: "متوفر باللتر",
        price: '‏٥٫٠٠٠ د.ك',
        imageSrc: null,
        imageAlt: 'زيت زيتون فلسطيني عصره اولى',
    },
    {
        id: 5,
        name: 'زيت تركي درجه اولى',
        description: "متوفر باللتر",
        price: '‏٣٫٠٠٠ د.ك',
        imageSrc: null,
        imageAlt: 'زيت تركي درجه اولى',
    },
    {
        id: 6,
        name: 'زيتون بالخلطه',
        description: "نص كيلو",
        price: '‏٢٫٠٠٠ د.ك',
        imageSrc: zaytoonMixImg,
        imageAlt: 'زيتون بالخلطه',
    },
    {
        id: 8,
        name: 'مقدوس حبه صغيره قرشة اقل من نص',
        description: "",
        price: '‏٢٫٢٥٠ د.ك',
        imageSrc: magdoosImage,
        imageAlt: 'مقدوس حبه صغيره قرشة اقل من نص',
    },
    {
        id: 9,
        name: 'سماق ادرني درجه اولى',
        description: "متوفر ربع كيلو أو كيلو كامل",
        price: '+‏١٫٢٥٠ د.ك',
        imageSrc: null,
        imageAlt: 'سماق ادرني درجه اولى',
    },
    {
        id: 10,
        name: 'سمسميه اردنيه مغلفه',
        description: "متوفر ربع كيلو أو كيلو كامل",
        price: '+‏١٫٥٠٠ د.ك',
        imageSrc: simsimiaImage,
        imageAlt: 'سمسميه اردنيه مغلفه',
    },
    {
        id: 11,
        name: 'مرميه',
        description: "ربع كيلو",
        price: '+‏١٫٢٥٠ د.ك',
        imageSrc: null,
        imageAlt: 'مرميه',
    },
]