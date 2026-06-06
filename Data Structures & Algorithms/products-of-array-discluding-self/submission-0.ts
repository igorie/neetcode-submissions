class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        return nums.reduce((prods, _, index) => {
            const prod = nums.reduce((prod, num, i) =>  {
                return prod * (i === index ? 1 : num)
            }, 1);


            prods.push(prod)
            
            return prods;
        }, [])
    }
}
