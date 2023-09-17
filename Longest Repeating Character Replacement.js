You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 var characterReplacement = function(s, k) {
    const charCount = new Array(26).fill(0); // To count the occurrences of each character
    let maxCount = 0; // To keep track of the maximum character count in the current window
    let left = 0; // Left pointer of the sliding window
    let result = 0; // To store the length of the longest substring

    for (let right = 0; right < s.length; right++) {
        const char = s.charCodeAt(right) - 'A'.charCodeAt(0);
        charCount[char]++; // Increment the character count

        // Update maxCount to be the maximum character count in the current window
        maxCount = Math.max(maxCount, charCount[char]);

        // If the number of characters that need to be changed (k) is less than the size of the current window,
        // slide the window to the right
        if (right - left + 1 - maxCount > k) {
            charCount[s.charCodeAt(left) - 'A'.charCodeAt(0)]--; // Decrement the character count
            left++; // Move the left pointer to the right
        }

        // Update the result with the maximum length of the current window
        result = Math.max(result, right - left + 1);
    }

    return result;
};
