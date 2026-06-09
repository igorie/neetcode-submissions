class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let best = 0;

        while (left < right) {
            const width = right - left;
            const height = Math.min(heights[left], heights[right]);
            best = Math.max(best, width * height);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return best;
    }
}
