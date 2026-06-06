class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);

        let result = 0;
        let streak = 0;

        console.log(nums)

        for (let i = 0; i < nums.length; i ++) {
            const current = nums[i];
            const prev = nums[i - 1];
            const diff = current - prev;

            if (diff > 1 || diff < -1) {
                console.log('BREAK')
                if (streak > result) {
                    result = streak;
                }
                streak = 0;
            }

            if (diff !== 0) {
                streak++;
            }
            console.log('streak: ', streak)
        }

        console.log('result: ', result);
        

        return  Math.max(streak, result);

        // const streaks = nums.sort((a, b) => a - b).reduce((acc, current, index, arr) => {
        //     const prev = arr[index - 1];
        //     const diff = current - prev;

        //     console.log(prev, current, acc)
            
        //     if (diff === 1 || diff === 0) {
        //         acc[acc.length - 1] += 1;
        //     }

        //     if (diff < -1 || diff > 1 || isNaN(diff)) {
        //         acc.push(0);
        //     }
            
        //     return acc;
        // }, []);

        // return Math.max(...streaks, 0);
        
    }
}
