//class <name_of_class> {}


class Car{
    color;
    noOfWheel = 4
    #serialNumber = "0000000";
    #milege = 0;;


    constructor(color, serialNumber, noOfWheel){
        this.color = color;
        this.#serialNumber = serialNumber
        this.noOfWheel = noOfWheel && noOfWheel > 1 ? noOfWheel : this.noOfWheel
    }

    get serialNumber(){
        return this.#serialNumber
    }
}

const Audi = new Car('red', 'UGGSSJA08BHS') //new Car

console.log('After Object')
