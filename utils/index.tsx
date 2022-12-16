export const formatNumber = (n: number) => {
    const formatedNumber = new Intl.NumberFormat('pt-BR').format(n);
    return formatedNumber
}

export const getObjectWithMostMessages = (o: any) => {
    const messagesCounts = Object.values(o).map((m: any) => m.value)
    messagesCounts.pop()
    return Object.values(o).find((m: any) => m.value === Math.max(...messagesCounts))
}

export const daysElapsed = (days: any) => {
    return Math.floor((Date.now() - Date.parse(days))/(1000*60*60*24))
}

// const utils = {formatNumber, getObjectWithMostMessages}
// export default utils
