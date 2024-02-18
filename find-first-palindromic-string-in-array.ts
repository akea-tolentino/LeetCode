function firstPalindrome(words: string[]): string {

    function palindrome(word: string): boolean {
        let i: number = 0;
        let j: number = word.length - 1;

        while (j >= i) {
            if (word[i] === (word[j])) {
                i++
                j--
            } else return false
        }

        return true;
    }

    for (let i: number = 0; i < words.length; i ++) {
        if (palindrome(words[i])) {
            return words[i]
        }
    }

    return ""
};