


interface Promotion {
    createPromotion()  : void 
}

class SmsPromotion implements Promotion {
    constructor() {
        console.log("promotion")  
    }
    createPromotion() {
        console.log("Create SMS Promotion")
    }
}


class PromotionFactory {
    type : string;
    constructor(type : string){
    this.type = type;
    }
    static createPromotion(type: string){
        switch(type){
            case "SMS":
            return new SmsPromotion()

            default: return null;
        }
    }
}

const promotion = PromotionFactory.createPromotion('SMS');
console.log(promotion)