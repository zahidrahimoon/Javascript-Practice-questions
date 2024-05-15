let res = ['z' , 'a' , 'i' , 'd'];
function reverse(arr){
     let left = 0 , right = arr.length - 1;
    
     for(; left < right; ) {
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;

          left++;
          right--;
        
    }
    return arr;
}

let original = [...res]; 
let result = reverse(res);

console.log(`The Reverse of the ${original} is ${result}`);
