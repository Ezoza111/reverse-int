module.exports = function reverse (n) {
    let m;
    n < 0? m= Math.abs(n) : m = n;
    let nStr = String(m);
    let splitN = nStr.split("");
    let reverseN = splitN.reverse();
    let joinN = reverseN.join("");
    let joinNwithout;
    joinN[0] == "0"? joinNwithout = joinN.slice(1) : 
    joinNwithout = joinN;
    return joinNwithout;
};

