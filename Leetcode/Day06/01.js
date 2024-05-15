let str = ['z', 'a', 'h', 'i', 'd'];

function reverseString(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
       
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        
        left++;
        right--;
    }
    return arr;
}

console.log(reverseString(str));
