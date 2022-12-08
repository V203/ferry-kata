import Car from "./Car";
import Ferry from "./Ferry";
import Icar from "./ICar";

let carv203 = new Car({color:"black",passengerCount:1});
let ferry = new Ferry(35,10);

ferry.board(carv203);//1
ferry.board(carv203);//2
ferry.board(carv203);//3
ferry.board(carv203);//4
ferry.board(carv203);//5
console.log(ferry.board(carv203));
ferry.board(carv203);//6
ferry.board(carv203);//7
ferry.board(carv203);//8
ferry.board(carv203);//9
ferry.board(carv203);//10
ferry.board(carv203);//11
