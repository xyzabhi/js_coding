//Write polyfills for map,filter and reduce
Array.prototype.customMap=function(callback){
    const mappedArr=[];
    for(let i=0;i<this.length;i++){
        mappedArr.push(callback(this[i]));
    }
    return mappedArr;
}

const multiply=(num)=>{
    return num*5;
}
console.log([1,2,3,4].customMap(multiply));



//Polyfill for filter method
Array.prototype.customFilter=function (callback){
    let filteredValues=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i])) filteredValues.push(this[i]);
    }
    return filteredValues;
}
const isEven=(val)=>{
    return val%2===0;
}

console.log([1,2,3,4].customFilter(isEven));


//Creating custom reduce
Array.prototype.customReduce=function(callback,initial_value){
    var acc=initial_value;
    for(let i=0;i<this.length;i++)
    {
        acc=acc?callback(acc,this[i],i,this):this[i];
    }
    return acc;
}

const nums=[1,2,3,4];
const sum=nums.customReduce((acc,curr,i,nums)=>{
   return acc+curr;
},0);
console.log(sum)