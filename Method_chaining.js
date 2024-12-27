//Variant1 Obj.op1(param1).op2(param2).op3(param3).value()
//Method1: Using Objects
const calculator={
    total:0,
    add: function(num){
        this.total+=num;
        return this;
    },
    sub: function(num){
        this.total-=num;
        return this;
    },
    mul: function(num){
        this.total*=num;
        return this;
    },
    div: function(num){
        this.total/=num;
        return this;
    },
    value:function(){
        return this.total;
    }
}

calculator.add(5).sub(4).mul(12).div(3).add(6).value();
console.log(calculator.total);

//Method2:Using Functions

const CALC=function(){
    this.total=0;
    this.add=(num)=>{
        this.total+=num;
        return this;
    }
    this.sub=(num)=>{
        this.total-=num;
        return this;
    }
    this.mul=(num)=>{
        this.total*=num;
        return this;
    }
    this.div=(num)=>{
        this.total/=num;
        return this;
    }
    this.value=()=>{
        return this.total;
    }
}

const newCalculator=new CALC();
newCalculator.add(4);
newCalculator.sub(7);
newCalculator.mul(5).div(6);
console.log(newCalculator.total);


//Variant1 Obj.op1(param1).op2(param2).op3(param3).value()
const ComputeAmount=function(){
    this.store=0;
    this.crores=function(val){
        this.store+=val*Math.pow(10,7);
        return this;
    }
    this.lakhs=function(val){
        this.store+=val*Math.pow(10,5);
        return this;
    }
    this.thousands=function(val){
        this.store+=val*Math.pow(10,3);
        return this;
    }
    this.hundreds=function(val){
        this.store+=val*Math.pow(10,2);
        return this;
    }
    this.tens=function(val){
        this.store+=val*Math.pow(10,1);
        return this;
    }
    this.ones=function(val){
        this.store+=val*Math.pow(10,0);
        return this;
    }
    this.value=function(){
        return this.store;
    }
}
const computeAmount=new ComputeAmount();
console.log(computeAmount().crores(6).value());