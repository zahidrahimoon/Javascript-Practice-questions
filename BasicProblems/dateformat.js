function getCurrentDate(format = 'mm-dd-yyyy') {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();

    switch (format) {
        case 'mm-dd-yyyy':
            return `${month}-${day}-${year}`;
        case 'mm/dd/yyyy':
            return `${month}/${day}/${year}`;
        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;
        case 'dd/mm/yyyy':
            return `${day}/${month}/${year}`;
        default:
            return 'Invalid format';
    }
}

console.log(getCurrentDate('mm-dd-yyyy'));
console.log(getCurrentDate('mm/dd/yyyy'));
console.log(getCurrentDate('dd-mm-yyyy'));
console.log(getCurrentDate('dd/mm/yyyy'));
