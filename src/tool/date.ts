
export class DateFormat {
    date: Date;
    constructor (date: Date | string){
        date = this.initDate(date);
        if (this.isDate(date)) {
            console.log(date);
        } else {
            throw new Error('不是一个日期')
        }
    }
    initDate (data: any): Date {
        return new Date(data);
    }
    isDate (date: Date): boolean {
        console.log('isDate');
        return true;
    }
}
