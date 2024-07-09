export const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const toUpperCaseEachWord = (str: string): string => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export const sortByAlpha = <T>(optionsLanguage: T[], sortkey: string): T[] => {
    return optionsLanguage.sort((a: any, b: any) =>
        a[sortkey] > b[sortkey] ? 1 : -1
    )
}
