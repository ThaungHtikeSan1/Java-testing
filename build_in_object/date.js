// console.dir(Date);
// console.log(Date.length);
// console.log(Date.name);

// const date = new Date();

// console.log(date.getDate());
// console.log(date.getFullYear());

// console.log(date.toDateString());
// console.log(date);

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[date.getMonth()]);

// set => can change date

// console.log(date);
// date.setDate(date.getDate()+5)
// console.log(date);

// const courseHour = 50
// const learnHour = 2
// const learnDay = 50/2
// date.setDate(date.getDate()+learnDay);
// console.log(date);

const startDate = new Date("2017-09-15")
const endDate = new Date()

const Anniversary = endDate - startDate;

const diffInDays = Math.floor(Anniversary / (1000 * 60 * 60 * 24));

console.log(`${diffInDays} total days`);
// console.log(date.getDate());
// date.setDate(date.getDate() + 3000)
// console.log(date);
