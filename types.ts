export interface Option {
  id: number,
  name: string
  priceIncrement: number
}

export interface ProductField {
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
  productFields: ProductField[]
}

export const enum CustomizationOptionType {
  SingleSelect = "singleSelect",
  MultiSelect = "multiSelect",
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
  instagramHandle: string
  whatsAppUri: string
  products: Product[]
}
