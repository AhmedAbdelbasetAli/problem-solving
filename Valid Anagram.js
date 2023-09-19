Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
  var isAnagram = function(s, t) {
     if (s.length !== t.length) {
        return false; // Anagrams must have the same length
    }

    const charCount = new Array(26).fill(0); // Character count array for lowercase letters

    // Count the characters in string s
    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Decrement the character count for string t
    for (let i = 0; i < t.length; i++) {
        charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;

        // If any character count becomes negative, it's not an anagram
        if (charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)] < 0) {
            return false;
        }
    }

    return true; // All character counts are zero, so s and t are anagram
};
