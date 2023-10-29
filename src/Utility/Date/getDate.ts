export function getDate (date : string) {
    const newDate : Date = new Date(date);
    const day: number = newDate.getDate();
    const month : number = newDate.getMonth();
    const year : number = newDate.getFullYear();
    return  (day < 10  ? "0" + day : day) + '.' + (month < 10 ? "0" + month : month) + '.' + year;
}