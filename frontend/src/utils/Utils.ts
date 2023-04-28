export const dateToTimeString = (date: Date | string) => {
    if(typeof date === "string") date = new Date(date)
    return `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`
  }