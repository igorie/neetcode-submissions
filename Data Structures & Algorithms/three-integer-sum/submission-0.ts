class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            // skip if it's the same value as before in sorted list, to not reuse the same value twice
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while(left < right) {
                let a = nums[i];
                let b = nums[left];
                let c = nums[right];

                let threeSum = a + b + c;
                
                if (threeSum > 0) {
                    right -= 1;
                } else if (threeSum < 0) {
                    left += 1;
                } else {
                    result.push([a, b, c]);
                    
                    left += 1;

                    // shift left pointer if it's the same value
                    while (nums[left] === nums[left - 1] && left < right) {
                        left += 1;
                    }
                }
            }
        }

        return result;
    }
}
