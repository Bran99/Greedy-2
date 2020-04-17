// Time Complexity : O(N) where N is the number of tasks
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : This is a hard question.

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (!tasks || !tasks.length) return 0;
    
    const charCount = new Array(26).fill(0);
    const N = tasks.length;

    for (const task of tasks) {
        let charCode = task.charCodeAt(0) - 65;
        charCount[charCode]++;
    }
    charCount.sort((a, b) => {return a - b;});

    const maxFreq = charCount[25];
    let occMaxFreq = 0;

    for (const freq of charCount) {
        if (freq == maxFreq) occMaxFreq++;
    }

    const partitions = maxFreq - 1;
    const emptySlots = partitions * (n - (occMaxFreq - 1));
    const pendingTasks = N - maxFreq * occMaxFreq;
    const idle = Math.max(emptySlots - pendingTasks, 0);
    
    return N + idle;
};
