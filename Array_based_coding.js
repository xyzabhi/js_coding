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