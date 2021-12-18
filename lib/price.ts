const enum Language {
    Arabic,
    English
}

export class Price {
    private lang = Language.Arabic
    private decimals = 3

    public static toFormattedString(price: number): string {
        const p = new Price(price)
        return p.toFormattedString();
    }

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