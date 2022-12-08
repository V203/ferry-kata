import ICar from "./ICar";

export default class Ferry {

    private cars: Array<ICar> = new Array();
    private max_cars: number
    private max_people: number

    constructor(people: number, cars: number) {
        this.max_people = people
        this.max_cars = cars;
    }

    board(icar: ICar): string {
        let cars_cap: boolean = false;
        let people_cap: boolean = false;
        let result = "";

        people_cap = this.people_count() < this.max_people;
        cars_cap = this.car_count() < this.max_cars;

        if (cars_cap && people_cap) {

            this.cars.push(icar)
            return result = "Accepted".concat(this.number_of_trips(icar) > 3 && this.number_of_trips(icar) < 7 ? ": 50% discount!" : this.number_of_trips(icar) >= 7 ? ": Hooray Free Ride!" : "");

        } else {
            return result = "Rejected!";
        }
    }

    people_count() {

        let initValue: number = 0;

        for (let i = 0; i < this.cars.length; i++) {
            initValue += this.cars[i].passengerCount;
        }
        return initValue;
    }

    car_count() {
        return this.cars.length;
    }

    count_colors(color: string): number {
        let counter: number = 0;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].color === color) counter++
        }
        return counter;
    }

    number_of_trips(icar: ICar) {
        let counter: number = 0
        this.cars.map(el => { el.num_plate === icar.num_plate, counter++ });
        return counter;
    }

    disembark() {
        this.cars.pop();
    }
}