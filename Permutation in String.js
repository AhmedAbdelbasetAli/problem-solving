/*Permutation in String
You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.

Example 1:

Input: s1 = "abc", s2 = "lecabee"

Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:

Input: s1 = "abc", s2 = "lecaabee"

Output: false
Constraints:

1 <= s1.length, s2.length <= 1000


Recommended Time & Space Complexity
You should aim for a solution with O(n) time and O(1) space, where n is the maximum of the lengths of the two strings.*/

function checkInclusion(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    // Initialize count arrays for the first window of s2 and s1
    for (let i = 0; i < len1; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    if (arraysEqual(count1, count2)) return true;

    // Slide the window
    for (let i = len1; i < len2; i++) {
        // Remove the outgoing character (leftmost of previous window)
        const outgoingChar = s2[i - len1];
        count2[outgoingChar.charCodeAt(0) - 97]--;

        // Add the incoming character (current position)
        const incomingChar = s2[i];
        count2[incomingChar.charCodeAt(0) - 97]++;

        if (arraysEqual(count1, count2)) return true;
    }

    return false;
}

// Helper function to compare two frequency arrays
function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

