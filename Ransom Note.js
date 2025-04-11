 /*  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */ 

function canConstruct(ransomNote, magazine) {
    // Create an array to store the frequency of each letter (26 lowercase letters)
    const charCount = new Array(26).fill(0);

    // Populate the frequency array with characters from magazine
    for (let char of magazine) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Check if ransomNote can be constructed
    for (let char of ransomNote) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (charCount[index] === 0) {
            // If the character is not available in magazine, return false
            return false;
        }
        // Use one occurrence of the character
        charCount[index]--;
    }

    // If we successfully construct ransomNote, return true
    return true;
}
