Given a string s, find the length of the longest 
substring
 without repeating characters.
   var lengthOfLongestSubstring = function(s) {
    const charSet = new Set(); // To store unique characters in the current substring
    let maxLength = 0;
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is already in the set, move the left pointer
        while (charSet.has(char)) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(char); // Add the character to the set
        maxLength = Math.max(maxLength, right - left + 1); // Update the maximum length
    }

    return maxLength;
};
