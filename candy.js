// Time Complexity : O(N)
// Space Complexity : O(N)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (!ratings || !ratings.length)  return 0;
    
    const totals = new Array(ratings.length).fill(1);
    let total = 0;
    
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) totals[i] += totals[i - 1];
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) totals[i] = Math.max(totals[i], totals[i + 1] + 1);
    }
    
    return totals.reduce((el, acc) => {return acc + el});
};
