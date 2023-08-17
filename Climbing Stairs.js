You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 var climbStairs = function(n) {
    if(n === 1 ){
        return 1;
    }
    let one = 1;
    let two =2;
    for(let i=3; i<=n; i++){
        let step = one + two
        one = two 
        two = step
    }
    return two;
};

