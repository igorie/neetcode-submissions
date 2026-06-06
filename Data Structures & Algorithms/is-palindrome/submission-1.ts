class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length -1;

        while (left < right) {
            while (left < right && !Solution.isAlphaNum(s[left])) {
                left++;
            }
            while (right > left && !Solution.isAlphaNum(s[right])) {
                right--;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    static isAlphaNum(str: string) {
        return /[A-Za-z0-9]/.test(str);
    }
}
