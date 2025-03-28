 /* There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.

 

Example 1:


Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 1
 

Constraints:

0 <= n <= 109 
Approach
The problem can be broken down into understanding how each bulb's state changes over the rounds. Each bulb i is toggled once for each divisor of i. A bulb will end up in the "on" state if it is toggled an odd number of times.

Divisors come in pairs except for perfect squares, which have an odd number of divisors. For example, the number 4 has divisors 1, 2, and 4 (three divisors, which is odd). Therefore, the bulbs that remain on are those at positions which are perfect squares.

The solution is to count the number of perfect squares up to n. This can be efficiently determined by computing the integer square root of n, as the integer part of the square root of n gives the largest integer k such that k^2 <= n.
*/ 

class Solution {
    public int bulbSwitch(int n) {
         return (int) Math.sqrt(n);
    }
}
