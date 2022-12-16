export const formatNumber = (n: number) => {
    const formatedNumber = new Intl.NumberFormat('pt-BR').format(n);
    return formatedNumber
}

export const getObjectWithMostMessages = (o: any) => {
    const messagesCounts = Object.values(o).map((m: any) => m.value)
    messagesCounts.pop()
    return Object.values(o).find((m: any) => m.value === Math.max(...messagesCounts))
}

const utils = {formatNumber, getObjectWithMostMessages}
export default utils
