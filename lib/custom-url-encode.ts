export function customEncodeUri(str: string): string {
    let strArr = Array.from(str)
    const result = strArr.map((letter) => {
        if (/[* \n:]/.test(letter)) {
            return encodeURI(letter)
        }
        return letter
    }).join('')

    return result
}