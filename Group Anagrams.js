Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

var groupAnagrams = function(strs) {
    const anagrams = {};

    for (const str of strs) {
        // Sort the characters in the string and use it as a key
        const sortedStr = str.split('').sort().join('');

        // If the key doesn't exist, create an empty array
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }

        // Push the original string into the array with the same key
        anagrams[sortedStr].push(str);
    }

    // Convert the values of the object into an array
    return Object.values(anagrams);
};
