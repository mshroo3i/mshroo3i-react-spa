import zatarImage from '../assets/products-pics/zatar-2.jpeg';
import do2aImage from '../assets/products-pics/do2a-2.jpeg';
import zaytoonMixImg from '../assets/products-pics/zaytoon-mix-1.jpeg';
import magdoosImage from '../assets/products-pics/magdoos-1.jpeg';
import simsimiaImage from '../assets/products-pics/simsimya-2.jpeg';
import { Price } from '../lib/price';

export interface Option {
    id: number,
    description: string,
    inputType: CustomizationOptionType
    choices: Array<{ id: number, text: string, price: Price }>
}

export interface Product {
    id: number
    name: string
    description: string
    price:  Price
    imageSrc: string | undefined
    imageAlt: string
    options: Option[]
}

const enum CustomizationOptionType {
    Radio = "Radio",
    Checkbox = "Checkbox",
    Text = "Text"
}

export const products: Product[] = [
    {
        id: 1,
        name: 'زعتر فاخر فلسطيني',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: new Price(2),
        imageSrc: zatarImage,
        imageAlt: 'زعتر فاخر فلسطيني',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: new Price(2)},
                    { id: 2, text: "علبه نص كيلو", price: new Price(4)},
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'زعتر ممتاز فلسطيني',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: new Price(1.5),
        imageSrc: zatarImage,
        imageAlt: 'زعتر ممتاز فلسطيني',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: new Price(1.5)},
                    { id: 2, text: "علبه نص كيلو", price: new Price(3)},
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'دقه فلسطينيه زعتر احمر',
        description: "متوفر علبه ريع كيلو أو علبه نص كيلو",
        price: new Price(1.5),
        imageSrc: do2aImage,
        imageAlt: 'دقه فلسطينيه زعتر احمر',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: new Price(1.5)},
                    { id: 2, text: "علبه نص كيلو", price: new Price(3)},
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'زيت زيتون فلسطيني عصره اولى',
        description: "متوفر باللتر",
        price: new Price(5),
        imageSrc: undefined,
        imageAlt: 'زيت زيتون فلسطيني عصره اولى',
        options: []
    },
    {
        id: 5,
        name: 'زيت تركي درجه اولى',
        description: "متوفر باللتر",
        price: new Price(3),
        imageSrc: undefined,
        imageAlt: 'زيت تركي درجه اولى',
        options: []
    },
    {
        id: 6,
        name: 'زيتون بالخلطه',
        description: "نص كيلو",
        price: new Price(2),
        imageSrc: zaytoonMixImg,
        imageAlt: 'زيتون بالخلطه',
        options: []
    },
    {
        id: 8,
        name: 'مقدوس حبه صغيره قرشة اقل من نص',
        description: "",
        price: new Price(2.25),
        imageSrc: magdoosImage,
        imageAlt: 'مقدوس حبه صغيره قرشة اقل من نص',
        options: []
    },
    {
        id: 9,
        name: 'سماق ادرني درجه اولى',
        description: "متوفر ربع كيلو أو نص كيلو",
        price: new Price(1.25),
        imageSrc: undefined,
        imageAlt: 'سماق ادرني درجه اولى',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: new Price(1.25)},
                    { id: 2, text: "علبه نص كيلو", price: new Price(2.5)},
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'سمسميه اردنيه مغلفه',
        description: "متوفر ربع كيلو أو نص كيلو",
        price: new Price(1.5),
        imageSrc: simsimiaImage,
        imageAlt: 'سمسميه اردنيه مغلفه',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: new Price(1.5)},
                    { id: 2, text: "علبه نص كيلو", price: new Price(3)},
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'مرميه',
        description: "متوفر ربع كيلو أو نص كيلو",
        price: new Price(1.25),
        imageSrc: undefined,
        imageAlt: 'مرميه',
        options: [
            {
                id: 1,
                description: "الحجم",
                inputType: CustomizationOptionType.Radio,
                choices: [
                    { id: 1, text: "علبه ريع كيلو", price: new Price(1.25)},
                    { id: 2, text: "علبه نص كيلو", price: new Price(2.5)},
                ]
            }
        ]
    },
]