class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            console.log(l, r, mid)

            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        let pivot = l;

        const leftSearchResult = this.binaryS(nums, target, 0, pivot);

        if (leftSearchResult !== -1) {
            return leftSearchResult;
        }

        return this.binaryS(nums, target, pivot, nums.length - 1);
    }

    private binaryS(nums: number[], target: number, l: number, r: number) {
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }

    
}
