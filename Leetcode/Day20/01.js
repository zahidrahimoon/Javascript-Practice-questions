var removeElement = function(nums, val) {
    let writeIndex = 0; // Pointer to track the position of elements not equal to `val`
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
};