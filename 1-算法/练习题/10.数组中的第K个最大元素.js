var findKthLargest = function(nums, k) {
  nums.sort((a,b) => {
    return b - a
  })
  console.log(nums);
  return nums[k-1]
};
var arr = [3,2,1,5,6,4]
console.log(findKthLargest(arr,2));