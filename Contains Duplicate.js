Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 function containsDuplicate(nums) {
  const uniqueElements = new Set();

  for (const num of nums) {
    if (uniqueElements.has(num)) {
      return true;
    } else {
      uniqueElements.add(num);
    }
  }

  return false;
}
