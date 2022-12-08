import ICar from "./ICar";

export default class Car implements ICar{
    color: string;
    passengerCount: number;
    num_plate:string;
   private location:Array<string> = ["CY","CZ","CJ"];

    constructor({ color, passengerCount }: { color: string; passengerCount: number; }){

        this.color = color;
        this.passengerCount = passengerCount;
        this.num_plate = this.location[Math.floor(Math.random()*3)] +"-" + Math.random().toString().substring(2,6);
    }

    
}

