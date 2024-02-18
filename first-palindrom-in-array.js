/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindromeInString = function(words) {
    function palindrome(word) {
        if (word === word.split("").reverse().join("")) {
            return true
        } else false
    }

    for (let i = 0; i < words.length; i++) {
        if (palindrome(words[i])) {
            return words[i]
        }
    }

    return "";
};