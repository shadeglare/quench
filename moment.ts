export type Year = number;
export type Month = number;
export type Day = number;
export type SmallDate = [Year, Month, Day];

export interface DateAggregation {
    years: number[];
    months: number[][];
    days: number[][][];
}

export function daysBetweenDates(begin: Date, end: Date): number {
    let oneDay = 24 * 60 * 60 * 1000;
    let diff = Math.abs(end.getTime() - begin.getTime());
    return Math.round(diff / oneDay);
}

export function toSmallDate(value: Date): SmallDate {
    return [value.getFullYear(), value.getMonth() + 1, value.getDate()];
}

export function year(value: SmallDate): number {
    return value[0];
}

export function month(value: SmallDate): number {
    return value[1];
}

export function day(value: SmallDate): number {
    return value[2];
}

export function daysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
}

export function lastDayOfMonth(year: number, month: number): SmallDate {
    return [year, month, daysInMonth(year, month)];
}

export function isValid(value: SmallDate): boolean {
    if (value[1] < 1 || value[1] > 12) {
        return false;
    }
    if (value[2] < 1 || value[2] > daysInMonth(value[0], value[1])) {
       return false;
    }
    return true;
}

export function compare(left: SmallDate, right: SmallDate): number {
    for (let i = 0; i < left.length; i++) {
        if (left[i] < right[i]) {
            return -1;
        } else if (left[i] > right[i]) {
            return 1;
        }
    }
    return 0;
}

let increment = (maxDays: number) => (value: SmallDate): SmallDate => {
    let day = value[2] + 1;
    let month = day > maxDays ? value[1] + 1 : value[1];
    let year = month > 12 ? value[0] + 1 : value[0];
    return [year, month > 12 ? 1 : month, day > maxDays ? 1 : day];
}

export function range(start: SmallDate, steps: number): SmallDate[] {
    let range = [start];
    let current = start;
    let threshold = lastDayOfMonth(year(start), month(start));
    let modificate = increment(day(threshold));
    
    for (let i = 1; i < steps; i++) {
        current = modificate(current);
        if (compare(current, threshold) > 0) {
            threshold = lastDayOfMonth(year(current), month(current));
            modificate = increment(day(threshold));
        }
        range.push(current);
    }
    
    return range;
}

export function toDateAggregation(dates: SmallDate[]): DateAggregation {
    let result: DateAggregation = { years: [], months: [], days: [] };
    
    if (dates.length !== 0) {
        let currentYear = null as number, currentYearIndex = -1;
        let currentMonth = null as number, currentMonthIndex = -1;
        
        for (let date of dates) {
            if (year(date) !== currentYear) {
                currentYear = year(date), currentYearIndex = currentYearIndex + 1;
                currentMonth = month(date), currentMonthIndex = 0;
                result.years.push(currentYear);
                result.months.push([currentMonth]);
                result.days.push([[day(date)]]);
            } else if (month(date) !== currentMonth) {
                currentMonth = month(date), currentMonthIndex = currentMonthIndex + 1;
                result.months[currentYearIndex].push(currentMonth);
                result.days[currentYearIndex].push([day(date)]);
            } else {
                result.days[currentYearIndex][currentMonthIndex].push(day(date));
            }
        }
    }

    return result;
}