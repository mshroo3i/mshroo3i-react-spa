export interface Option {
  id: number,
  name: string
  priceIncrement: number
}

export interface ProductOption {
  id: number
  optionName: string
  optionType: CustomizationOptionType
  options: Option[]
}

export interface Product {
  id: number
  name: string
  description: string
  price:  number
  imageSrc: string | null | StaticImageData
  imageAlt: string
  productOptions: ProductOption[]
}

export const enum CustomizationOptionType {
  Radio = "Radio",
  Checkbox = "Checkbox",
  Text = "Text"
}

export interface ProductOrder {
  productId: number
  quantity: number
  product: Product,
  productOptions: { [optionId: number]: number}
}

export interface StoreInfo {
  shortcode: string
  nameAr: string
  nameEn: string
  description: string
  heroImg: string | StaticImageData
  InstagramHandle: string
  WhatsAppUri: string
}
