function getCurrentDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    let hour = now.getHours();
    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; 
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    return `Today is ${dayOfWeek}, and Current Time is ${hour}:${min} :${amPm} : ${sec}`;
}
console.log(getCurrentDate());
