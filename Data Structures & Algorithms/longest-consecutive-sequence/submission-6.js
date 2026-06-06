class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);

        let result = 0;
        let streak = 0;

        for (let i = 0; i < nums.length; i ++) {
            const current = nums[i];
            const prev = nums[i - 1];
            const diff = current - prev;

            if (diff > 1 || diff < -1) {
                if (streak > result) {
                    result = streak;
                }
                streak = 0;
            }

            if (diff !== 0) {
                streak++;
            }
        }

        return  Math.max(streak, result);
    }
}
