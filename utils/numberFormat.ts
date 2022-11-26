export const converToCurrencyFormat = (data: number) => {
    return new Intl.NumberFormat().format(data)
}
