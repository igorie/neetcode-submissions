class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const charsMap = new Map<string, number>();
        let maxCharFreq = 0;
        let longest = 0;
        let nextIndex = 0;

        for (let i = 0; i < s.length;i ++) {
            const char = s[i];
            
            if (charsMap.has(char)) {
                const q = charsMap.get(char);
                charsMap.set(char, q + 1);
            } else {
                charsMap.set(char, 1);
            }

            maxCharFreq = Math.max(maxCharFreq, charsMap.get(char));

            while (i - nextIndex + 1 - maxCharFreq > k) {
                const nextChar = s[nextIndex];
                const q = charsMap.get(nextChar);
                charsMap.set(nextChar, q - 1);
                nextIndex++;
            }

            longest = Math.max(longest, i - nextIndex +1)
        }
        return longest;
    }
}
