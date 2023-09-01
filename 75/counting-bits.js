// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:
// 0 <= n <= 105

var countBits = function(n) { // optimized
    let ans = [0, 1];

    if (n === 0) {
        return [0];
    } else if (n === 1) return ans;

    let i = 2;

    let temp = [1];

    while (i <= n) {

        temp = temp.concat(temp.map(num => ( num + 1 )));

        ans = ans.concat(temp);

        i *= 2;

    };

    ans.splice(n + 1);

    return ans;
};

// var countBits = function(n) {
//     const ans = [0];

//     if (n === 0) return ans;

//     let i = 1;

//     while (i <= n) {
//         let bString = i.toString(2).split('');
//         let isInString = 0;

//         bString.forEach((bin) => {
//             if (bin === '1') isInString++
//         });

//         ans.push(isInString);
//         i++;
//     };

//     return ans;
// };