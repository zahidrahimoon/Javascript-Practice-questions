var filter = function(arr , fn){
     n = arr.length;
    var filterArray = new Array();

    for(let i=0; i<n; i++){
        if(fn(arr[i] , i)){
            filterArray.push(arr[i])
        }
    }
    return filterArray;
};