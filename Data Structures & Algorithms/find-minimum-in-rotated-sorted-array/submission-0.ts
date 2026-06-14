class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let middle = Math.floor((right - left)  / 2) + left;

            if (nums[middle] < nums[right]) {
                right = middle
            } else {
                left = middle + 1
            }
        }

        return nums[left];
    }
}
