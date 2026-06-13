class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const closeBrackets = {
            '}': '{',
            ')': '(',
            ']': '[',
        };
        const stack = [];

        for (const char of s) {
            const closeBracket = closeBrackets[char];

            if (closeBracket) {
                if (stack.length > 0 && stack[stack.length - 1] === closeBracket) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return !stack.length;
    }
}
