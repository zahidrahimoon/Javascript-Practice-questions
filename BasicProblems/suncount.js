function findSunday() {
    let Sundays = [];

    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);   
        if (date.getDay() === 0) {
            Sundays.push(year);
        }
    }

    return Sundays;
}

let SundayList = findSunday();
console.log("Years when January 1st is a Sunday between 2014 and 2050:");
console.log(SundayList.join(", "));
