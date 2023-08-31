// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

var findMaxAverage = function(nums, k) {
    if (nums.length === 1) return nums[0];

    if (k === 1) return Math.max(...nums);

    let current_sum = 0;
    
    nums.slice(0, k).forEach((num) => current_sum += num);

    let temporary_sum = current_sum;

    let pointer2 = k;
    let previous_pointer = 0;

    while (pointer2 < nums.length) {
        previous_num = nums[previous_pointer];
        next_num = nums[pointer2];

        temporary_sum -= previous_num;
        temporary_sum += next_num;

        if (temporary_sum > current_sum) current_sum = temporary_sum

        previous_pointer++
        pointer2++
    };

    return current_sum / k;
};