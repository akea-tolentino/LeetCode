# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

# Example 1:
# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10

# Example 2:
# Input: n = 5
# Output: [0,1,1,2,1,2]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# 3 --> 11
# 4 --> 100
# 5 --> 101

# Constraints:
# 0 <= n <= 105

def count_bits(n)
    #create an array to push values into
    ans = [0]

    #set a base case
    return ans if n == 0

    #set a pointer
    i = 1

    #while loop for while pointer is not greater than n
    while i <= n
        # calculate number of 1's in binary representation
        bstring = i.to_s(2)
        
        # counter for 1's
        i_in_string = 0

        # iterate through binary string and increment counter by one for every '1' read
        bstring.each_char do |bin|
            i_in_string += 1 if bin == '1'
        end

        # push value into ans array, increment pointer
        ans.push(i_in_string)
        i += 1
    end
    
    # return ans array
    return ans
end