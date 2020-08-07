class Parents{
    constructor(){
        this.bap = "Sab ka bap"
    }
}

class Child extends Parents{
    
    constructor(){
        super()
        this.name = "Sajib"
    }
}

class Baby extends Parents{
    constructor(){
        super()
        this.name = "Rajib"
    }
    getDetails(){
        return this.name+" "+this.bap ;
    }
}

let ob1 = new Child()
let ob2 = new Baby()
console.log(ob1,ob2);
console.log(ob2.getDetails());