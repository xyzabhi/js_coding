function sum(a){
    if(!a)return 0;
    return function (b){
        if(b) return sum(a+b);
        return a;
    }
}

console.log("hello");
console.log("TestCase1:",sum());
console.log("TestCase2:",sum(1)());
console.log("TestCase3:",sum(1)(2)(3)());
console.log("TestCase4:",sum(1)(2)(3)(4)(5)());
