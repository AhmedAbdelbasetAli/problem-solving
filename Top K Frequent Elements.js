Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Create an array of unique elements
    const uniqueElements = Array.from(frequencyMap.keys());

    // Step 3: Sort unique elements by their frequencies in descending order
    uniqueElements.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

    // Step 4: Return the top k elements
    return uniqueElements.slice(0, k);
