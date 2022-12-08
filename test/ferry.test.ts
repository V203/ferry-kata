import assert from 'assert';
import Car from "../Car";
import Ferry from "../Ferry";

describe("Ferry testing", function () {

    it("If a car has made more than 7 rides the ride should be free.", function () {

        let ferry = new Ferry(35, 10);
        let aston_martin = new Car({ color: "blue", passengerCount: 1 });
        ferry.board(aston_martin);
        ferry.board(aston_martin);
        ferry.board(aston_martin);
        ferry.board(aston_martin);
        ferry.board(aston_martin);
        ferry.board(aston_martin);
        ferry.board(aston_martin);
        ferry.board(aston_martin);

        let trips_on_ferry = ferry.board(aston_martin);
        let expected = "Accepted: Hooray Free Ride!";

        assert.equal(trips_on_ferry, expected);
    });

    it("We should add a car to the ferry and the car count should return the length of one ", function () {

        let ferry = new Ferry(35, 10);

        let aston_martin = new Car({ color: "blue", passengerCount: 4 });

        ferry.board(aston_martin);

        let car_count = ferry.car_count();
        let expected = 1;
        assert.equal(car_count, expected);
    });

    it("The board method should return accept", function () {

        let ferry = new Ferry(35, 10);
        let aston_martin = new Car({ color: "blue", passengerCount: 4 });

        let message = ferry.board(aston_martin);
        let expected = "Accepted";

        assert.equal(message, expected);
    });

    it("The board method should return Reject once the ferry capacity is above 10", function () {

        let ferry = new Ferry(35, 10);
        let aston_martin = new Car({ color: "blue", passengerCount: 4 });
        let Tazz = new Car({ color: "blue", passengerCount: 4 });
        let BMW = new Car({ color: "black", passengerCount: 3 });
        let Toyota = new Car({ color: "pink", passengerCount: 2 });
        let aston_martin_larouge = new Car({ color: "blue", passengerCount: 4 });
        let Tazz_i30 = new Car({ color: "blue", passengerCount: 4 });
        let BMW_m3 = new Car({ color: "black", passengerCount: 3 });
        let Toyota_v1 = new Car({ color: "pink", passengerCount: 2 });
        let Toyota_v3 = new Car({ color: "orange", passengerCount: 4 });
        let Toyota_evo = new Car({ color: "pink", passengerCount: 2 });

        ferry.board(aston_martin);
        ferry.board(Tazz);
        ferry.board(BMW);
        ferry.board(Toyota);
        ferry.board(aston_martin_larouge);
        ferry.board(Tazz_i30);
        ferry.board(Toyota_v1);
        ferry.board(Toyota_evo);
        ferry.board(aston_martin);
        ferry.board(Toyota_v3);
        ferry.count_colors("orange");

        let message = ferry.board(BMW_m3);
        
        let expected = "Rejected!";
        assert.equal(message, expected);
    });

    it("Three black cars will board the ferry and the count colors method should return three for black cars", () => {
        let ferry = new Ferry(35, 10);
        let BMW = new Car({ color: "black", passengerCount: 3 });
        let BMW_m3 = new Car({ color: "black", passengerCount: 3 });
        let UNO = new Car({ color: "black", passengerCount: 4 });
        let aston_martin = new Car({ color: "blue", passengerCount: 4 });
        let lamborghini = new Car({ color: "Grey", passengerCount: 2 });

        ferry.board(BMW);
        ferry.board(BMW_m3);
        ferry.board(UNO);
        ferry.board(aston_martin);
        ferry.board(lamborghini);

        let count_colors = ferry.count_colors("black");
        let expected = 3;

        assert.equal(count_colors, expected);
    })

    it("The count people method should return the number 10 people", function () {

        let ferry = new Ferry(35, 10);
        let aston_martin = new Car({ color: "blue", passengerCount: 4 });
        let BMW = new Car({ color: "black", passengerCount: 4 });
        let lamborghini = new Car({ color: "Grey", passengerCount: 2 });

        ferry.board(aston_martin);
        ferry.board(BMW);
        ferry.board(lamborghini);

        let people_count = ferry.people_count();
        let expected = 10;

        assert.equal(people_count, expected);
    });

    it("We should add three cars with the total of 10 people in the cars", function () {

        let ferry = new Ferry(35, 10);
        let aston_martin = new Car({ color: "blue", passengerCount: 4 });
        let BMW = new Car({ color: "black", passengerCount: 4 });
        let lamborghini = new Car({ color: "Grey", passengerCount: 2 });

        ferry.board(aston_martin);
        ferry.board(BMW);
        ferry.board(lamborghini);

        let people_count = ferry.people_count();
        let expected = 10;

        assert.equal(people_count, expected);
    });


    it("We should add three cars and one car should disembark and the ferry should be left with only two cars.", function () {

        let ferry = new Ferry(35, 10);
        let aston = new Car({ color: "grey", passengerCount: 4 });
        let BMW = new Car({ color: "black", passengerCount: 4 });
        let lamborghini = new Car({ color: "grey", passengerCount: 2 });

        ferry.board(aston);
        ferry.board(BMW);
        ferry.board(lamborghini);
        ferry.disembark();

        let car_count = ferry.car_count();
        let expected = 2;

        assert.equal(car_count, expected);
    });


    it("If the there are more than 35 people in the ferry the board method should return reject", function () {

        let ferry = new Ferry(35, 10);
        let aston = new Car({ color: "grey", passengerCount: 5 });
        let BMW = new Car({ color: "black", passengerCount: 5 });
        let lamborghini = new Car({ color: "grey", passengerCount: 5 });
        let Toyota_v1 = new Car({ color: "pink", passengerCount: 5 });
        let Toyota_v3 = new Car({ color: "orange", passengerCount: 5 });
        let Toyota_evo = new Car({ color: "pink", passengerCount: 5 });
        let Toyota_i20 = new Car({ color: "green", passengerCount: 5 });
        let UNO = new Car({ color: "black", passengerCount: 5 });
        let mazzarettiv4 = new Car({ color: "black", passengerCount: 5 });
        let mazzarettiv1 = new Car({ color: "black", passengerCount: 5 });
        let mazzarettiv2 = new Car({ color: "black", passengerCount: 5 });

        ferry.board(aston);
        ferry.board(BMW);
        ferry.board(lamborghini);
        ferry.board(Toyota_v1);
        ferry.board(Toyota_v3);
        ferry.board(Toyota_evo);
        ferry.board(UNO);
        ferry.board(mazzarettiv2);
        ferry.board(mazzarettiv1);
        ferry.board(mazzarettiv4);
      
        let message = ferry.board(Toyota_i20);
        let expected = "Rejected!";

        assert.equal(message, expected);
    });

    it("If a car use the ferry three times the driver should earn a discount of 50%", function () {

        let ferry = new Ferry(35, 10);
        let BMW = new Car({ color: "black", passengerCount: 5 });

        ferry.board(BMW);
        ferry.board(BMW);
        ferry.board(BMW);

        let discounted_ride = ferry.board(BMW);
        let expected = "Accepted: 50% discount!"; 

        assert.equal(discounted_ride, expected);
    });
});



