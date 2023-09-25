class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        let sum = 0;
        for(let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        };
        return sum;
    };
};

class Triangle extends Polygon{
    get isValid(){
        let sideA = this.array[0];
        let sideB = this.array[1];
        let sideC = this.array[2];
    
        if(((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) && ((sideB + sideC) > sideA)){
            return true;
        } else {
            return false;
        };
    };
};

class Square extends Polygon{
    get isValid(){
        let sideA = this.array[0];
        let sideB = this.array[1];
        let sideC = this.array[2];
        let sideD = this.array[3];

        if((sideA === sideB) && (sideA === sideC) && (sideA === sideD)){
            return true;
        } else {
            return false;
        };
    };

    get area(){
        let sideA = this.array[0];
        
        let areaSquare = (sideA * sideA);
        return areaSquare;
    };
};