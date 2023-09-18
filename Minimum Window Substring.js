Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 var minWindow = function(s, t) {
    const charCount = new Array(128).fill(0); // Character count array (ASCII characters)
    let left = 0; // Left pointer of the sliding window
    let minLen = Infinity; // Minimum window length
    let minStart = 0; // Starting index of the minimum window substring
    let count = t.length; // Number of characters from string t that need to be included in the window

    // Count the characters in string t
    for (let char of t) {
        charCount[char.charCodeAt(0)]++;
    }

    // Initialize the right pointer
    for (let right = 0; right < s.length; right++) {
        const rightChar = s.charCodeAt(right);

        // If the character is in string t, decrement the count
        if (charCount[rightChar] > 0) {
            count--;
        }

        charCount[rightChar]--; // Decrement the character count

        // When all characters from string t are included in the window, try to minimize the window
        while (count === 0) {
            // Update the minimum window length and starting index if needed
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            // Move the left pointer to the right
            const leftChar = s.charCodeAt(left);
            charCount[leftChar]++; // Increment the character count

            // If the character is in string t, increment the count
            if (charCount[leftChar] > 0) {
                count++;
            }

            left++;
        }
    }

    // If minLen is still Infinity, there is no valid window
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};
