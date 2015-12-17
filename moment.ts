import * as _ from "./extensions";

let daysToMonth365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
let daysToMonth366 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInMonth(year: number, month: number): number {
    let days = isLeapYear(year) ? daysToMonth366 : daysToMonth365;
    return days[month] - days[month - 1];
}

// export type Year = number;
// export type Month = number;
// export type Day = number;
// export type SmallDate = [Year, Month, Day];

// export function daysBetweenDates(begin: Date, end: Date): number {
//     let oneDay = 24 * 60 * 60 * 1000;
//     let diff = Math.abs(end.getTime() - begin.getTime());
//     return Math.round(diff / oneDay);
// }

// export function toSmallDate(value: Date): SmallDate {
//     return [value.getFullYear(), value.getMonth() + 1, value.getDate()];
// }

// export function year(value: SmallDate): number {
//     return value[0];
// }

// export function month(value: SmallDate): number {
//     return value[1];
// }

// export function day(value: SmallDate): number {
//     return value[2];
// }

// export function daysInMonths(isLeapYear: boolean): number[] {
//     let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (isLeapYear) {
//         daysInMonths[1] = 29;
//     }
//     return daysInMonths;
// }

// const leapYearDaysInMonths = daysInMonths(true);
// const nonLeapYearDaysInMonths = daysInMonths(false);
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// export function nameOfMonth(month: number): string {
//     return months[month - 1];
// }

// export function isLeapYear(year: number): boolean {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// export function firstDayOfMonth(year: number, month: number): number {
//     if (month < 3) {
//         month += 12;
//         year -= 1;
//     }

//     let k = Math.floor(year % 100);
//     let j = Math.floor(year / 100);
//     let day = 1;

//     return (((day + Math.floor(((month + 1) * 13) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) + (5 * j)) + 5) % 7) + 1;
// }

// export function lastDayOfMonth(year: number, month: number): SmallDate {
//     return [year, month, daysInMonth(year, month)];
// }

// export function isValid(value: SmallDate): boolean {
//     if (month(value) < 1 || month(value) > 12) {
//         return false;
//     }
//     if (day(value) < 1 || day(value) > daysInMonth(year(value), month(value))) {
//         return false;
//     }
//     return true;
// }

// export function compare(left: SmallDate, right: SmallDate): number {
//     for (let i = 0; i < left.length; i++) {
//         if (left[i] < right[i]) {
//             return -1;
//         } else if (left[i] > right[i]) {
//             return 1;
//         }
//     }
//     return 0;
// }

// let increment = (maxDays: number) => (value: SmallDate): SmallDate => {
//     let nextDay = day(value) + 1;
//     let nextMonth = nextDay > maxDays ? month(value) + 1 : month(value);
//     let nextYear = nextMonth > 12 ? year(value) + 1 : year(value);
//     return [nextYear, nextMonth > 12 ? 1 : nextMonth, nextDay > maxDays ? 1 : nextDay];
// }

// export function range(start: SmallDate, steps: number): SmallDate[] {
//     let range = [start];
//     let current = start;
//     let threshold = lastDayOfMonth(year(start), month(start));
//     let modificate = increment(day(threshold));

//     for (let i = 1; i < steps; i++) {
//         current = modificate(current);
//         if (compare(current, threshold) > 0) {
//             threshold = lastDayOfMonth(year(current), month(current));
//             modificate = increment(day(threshold));
//         }
//         range.push(current);
//     }

//     return range;
// }

// export interface DateAggregation {
//     years: number[];
//     months: number[][];
//     days: number[][][];
// }

// export function toDateAggregation(dates: SmallDate[]): DateAggregation {
//     let result: DateAggregation = { years: [], months: [], days: [] };

//     if (dates.length !== 0) {
//         let currentYear = null as number, currentYearIndex = -1;
//         let currentMonth = null as number, currentMonthIndex = -1;

//         for (let date of dates) {
//             if (year(date) !== currentYear) {
//                 currentYear = year(date), currentYearIndex = currentYearIndex + 1;
//                 currentMonth = month(date), currentMonthIndex = 0;
//                 result.years.push(currentYear);
//                 result.months.push([currentMonth]);
//                 result.days.push([[day(date)]]);
//             } else if (month(date) !== currentMonth) {
//                 currentMonth = month(date), currentMonthIndex = currentMonthIndex + 1;
//                 result.months[currentYearIndex].push(currentMonth);
//                 result.days[currentYearIndex].push([day(date)]);
//             } else {
//                 result.days[currentYearIndex][currentMonthIndex].push(day(date));
//             }
//         }
//     }

//     return result;
// }