#!/usr/bin/env node

const dt = new Date();
const [, , month = dt.getMonth() + 1, year = dt.getFullYear()] = process.argv;

dt.setMonth(month - 1);
dt.setFullYear(year);

dt.setDate(1);
// console.log('🚀  dt:', dt.toISOString());
// console.log('🚀  day:', dt.getDay());
const firstWeekDay = dt.getDay();

dt.setMonth(dt.getMonth() + 1); // next month
dt.setDate(0);
const lastDate = dt.getDate();
// console.log('🚀  dt:', lastDate);

let s = `\n           ${dt.getMonth() + 1}월 ${dt.getFullYear()}년\n\n   `;
s += [...'일월화수목금토\n'].map(w => w).join('  ');
s += '    '.repeat(firstWeekDay);
for (let i = 1; i <= lastDate; i++) {
  s += i.toString().padStart(4);
  if ((i + firstWeekDay) % 7 === 0) s += '\n';
}

console.log(s);
