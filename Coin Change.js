You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

  var coinChange = function(coins, amount) {
    const table = new Array(amount + 1).fill(amount+1)
    table[0] = 0;

    for(const coin of coins){
        for(let i= coin; i<=amount; i++ ){
            
                const idx = i- coin; 
                const amt  = table[idx] + 1;
                table[i] = Math.min(amt, table[i])
           
            
        }
    }
    return table[amount] === amount+1 ? -1: table[table.length - 1]
};
