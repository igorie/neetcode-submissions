class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const arrStr = s.split('').reduce((acc, str) => {
            if (/[A-Za-z0-9]/.test(str)) {
                acc.push(str.toLowerCase());
            }
            return acc;
        }, []);
        const middle = Math.floor(arrStr.length / 2);
        const offset = arrStr.length % 2;

        const a = arrStr.slice(0, middle).join('');
        const b = arrStr.slice(middle + offset, arrStr.length).reverse().join('');
        return a === b;
    }
}
