module.exports = function reverse (n) {
 let nStr = String(n);
 let splitN = nStr.split("");
 let reverseN = splitN.reverse();
 let joinN = reverseN.join("");
 return +joinN;
};

