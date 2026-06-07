class Solution {
    private readonly delimiter = '#';
    
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let hash = '';

        for (let str of strs) {
            hash += `${str.length}${this.delimiter}${str}`;
        }

        console.log(hash);
        return hash;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strs = [];
        
        let cursor = 0;

        while (cursor < str.length) {
            let lengthCursor = cursor;

            while (str[lengthCursor] !== this.delimiter) {
                lengthCursor++;
            }

            let length = parseInt(str.substring(cursor, lengthCursor));
            cursor = lengthCursor + 1;
            lengthCursor = cursor + length;

            strs.push(str.substring(cursor, lengthCursor));
            cursor = lengthCursor;
        }

        return strs;
    }
}
