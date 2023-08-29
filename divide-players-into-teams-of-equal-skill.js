// You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player.
// Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.
// The chemistry of a team is equal to the product of the skills of the players on that team.
// Return the sum of the chemistry of all the teams, or
// return -1 if there is no way to divide the players into teams such that the total skill of each team is equal

// Example 1:
// Input: skill = [3,2,5,1,3,4]
// Output: 22
// Explanation: 
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

// Example 2:
// Input: skill = [3,4]
// Output: 12
// Explanation: 
// The two players form a team with a total skill of 7.
// The chemistry of the team is 3 * 4 = 12.

// Example 3:
// Input: skill = [1,1,2,3]
// Output: -1
// Explanation: 
// There is no way to divide the players into teams such that the total skill of each team is equal.
 
// Constraints:
// 2 <= skill.length <= 105
// skill.length is even.
// 1 <= skill[i] <= 1000

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {

    const sortedArray = skill.sort((a, b) => a - b);
    
    // sort the array 

    let pointer1 = 0; 

    let pointer2 = sortedArray.length - 1; 

    // two pointers from the first to the last

    const comparer = sortedArray[pointer1] + sortedArray[pointer2];

    // comparer = sum of first and last

    let totalChemistry = 0 

    while (pointer1 < pointer2) {

        let number1 = sortedArray[pointer1];

        let number2 = sortedArray[pointer2];

        // check the sum of the pointers to comparer
        if ( number1 + number2 === comparer) {
            // move pointers and add product to total chemistry 
            totalChemistry += (number1 * number2);
            pointer1++;
            pointer2--;
        } else {
            // return -1 if not equal
            return -1;
        }
    }
    
    //return total chemistry
    return totalChemistry;
};