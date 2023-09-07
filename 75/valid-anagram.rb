# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# typically using all the original letters exactly once.

# Example 1:
# Input: s = "anagram", t = "nagaram"
# Output: true

# Example 2:
# Input: s = "rat", t = "car"
# Output: false

# Constraints:
# 1 <= s.length, t.length <= 5 * 104
# s and t consist of lowercase English letters.

def is_anagram(s, t)
    # check string lengths, if !=, then false
    return false if s.length != t.length

    # iterate through s, populating a hash counter for characters
    char_count = Hash.new(0)

    s.each_char do |char|
        char_count[char] += 1
    end

    # iterate through t, decrementing hash counter for each value, if value doesnt exist, return false
    t.each_char do |char|
        if char_count[char] >= 1
            char_count[char] -= 1
        else
            return false
        end
    end

    true
end