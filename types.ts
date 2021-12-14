export interface Option {
  id: number,
  description: string,
  inputType: CustomizationOptionType
  choices: Array<{ id: number, text: string, price: number }>
}

export interface Product {
  id: number
  name: string
  description: string
  price:  number
  imageSrc: string | null
  imageAlt: string
  options: Option[]
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
  options: { [choiceId: number]: number}
}

export interface StoreInfo {
  storeNameAr: string
  storeNameEn: string
  storeDescriptionAr: string
  heroImage: string | StaticImageData
  instagramLink: string
  whatsappLink: string
}
