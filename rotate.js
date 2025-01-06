function rotateArray(nums, k) {
    if (k === 0 || k === nums.length) {
      return nums;
    }
    k = k % nums.length;
    const rotated = [];
    for (let i = nums.length - k; i < nums.length; i++) {
      rotated.push(nums[i]);
    }
    for (let i = 0; i < nums.length - k; i++) {
      rotated.push(nums[i]);
    }
    return rotated;
  }



  console.log(rotateArray([1,2,3,4,5],2));