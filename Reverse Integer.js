Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


var reverse = function(x) {
    let reversed = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (x !== 0) {
        const pop = x % 10;
        x = Math.trunc(x / 10);

        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && pop > 7)) {
            return 0;
        }
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && pop < -8)) {
            return 0;
        }

        reversed = reversed * 10 + pop;
    }

    return reversed;
};
