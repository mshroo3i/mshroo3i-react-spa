const enum Language {
    Arabic,
    English
}

const enum Currency {
    KWD = "د.ك",
}

export class Price {
    private lang = Language.Arabic
    private currency = Currency.KWD
    private decimals = 3

    constructor(private price: number) {
        // this.price = price.toFixed(3)
    }

    toFormattedString(): string {
        const priceLocale = this.price.toLocaleString("ar-EG", { style: 'currency', currency: 'KWD' })
        return priceLocale;
    }

    get raw() {
        return this.price;
    }
}