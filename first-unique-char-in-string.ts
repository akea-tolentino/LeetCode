function firstUniqChar(s: string): number {
    let chars = {}

    for (let idx = 0; idx < s.length; idx++) {
        if (chars[s[idx]] === undefined) {
            chars[s[idx]] = 1;
        } else {
            chars[s[idx]] += 1;
        }
    }

    for (let idx = 0; idx < s.length; idx++) {
        if (chars[s[idx]] === 1) {
            return idx;
        }
    }

    return -1;
}