class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffsMap = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            const diff = target - value;

            if (diffsMap.has(diff)) {
                return [diffsMap.get(diff), i];
            }

            diffsMap.set(value, i);
        }

        return [];
    }
}
