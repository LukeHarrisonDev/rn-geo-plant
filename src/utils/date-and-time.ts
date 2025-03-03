export function formatDate(dateAndTimeString: string): string {
    const date = `${dateAndTimeString.slice(8, 10)}/${dateAndTimeString.slice(5, 7)}/${dateAndTimeString.slice(0, 4)}`
    return date
}

export function formatTime(dateAndTimeString: string): string {
    return dateAndTimeString.slice(11, 16)
}