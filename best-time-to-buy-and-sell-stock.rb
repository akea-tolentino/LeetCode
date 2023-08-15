# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

# Example 1:
# Input: prices = [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
# Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

# Example 2:
# Input: prices = [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transactions are done and the max profit = 0.

# Constraints:
# 1 <= prices.length <= 105
# 0 <= prices[i] <= 104

def max_profit(prices)

    biggest_profit = 0

    min = prices.min 

    max = prices.max 


    if (prices.find_index(min) < prices.find_index(max))
        return max - min 
    end

    pivot = prices[0]

    prices[1..-1].each_with_index do |num, i|
        if (num < pivot)
            pivot = num
            next 
        else 
            sale = num - pivot
            if sale > biggest_profit 
                biggest_profit = sale
            end
        end
    end

    return biggest_profit

end