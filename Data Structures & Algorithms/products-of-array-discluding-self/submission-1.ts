class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array(nums.length);

        let prefix = 1;
        nums.forEach((num, i) => {
            result[i] = prefix;
            prefix *= num;
        });

        console.log(result)

        let postfix = 1;
        return nums.reduceRight((acc, num, index) => {
            acc[index] *= postfix;
            postfix *= num;

            return acc;
        }, result)
    }
}
