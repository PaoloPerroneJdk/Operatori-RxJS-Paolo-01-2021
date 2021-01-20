import { Observable, interval, of } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

console.log("OPERATORE OF, MAP, PIPE");

map((x: any) => x * 2)(of(1, 2, 3, 4)).subscribe(val =>
  console.log("val", val)
);

console.log("altra mamiera");

const observable1 = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

observable1
  .pipe(map((x: any) => x * 2))
  .subscribe(val => console.log("val", val));

console.log("OPERATORI INTERVAL & THROTTLETIME");

const observable = interval(
  1000
); /* INTERVAL EMETTE DEI NUMERI IN SEQUENZA IN BASE A UN TIMEFRAME CHE GLI PASSIAMO, IN QUESTO CASO (1000) */
observable.pipe(throttleTime(2000)).subscribe(val => console.log("val", val));
