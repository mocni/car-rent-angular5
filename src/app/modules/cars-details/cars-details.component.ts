import { Component, OnInit } from '@angular/core';
import {CarsSettings} from "../../data/cars";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  car : Array<object> = CarsSettings.CARS;
  carId;
  backgroundImage : object;
  constructor(private route: ActivatedRoute) { 
    this.carId =  this.route.params._value.id;
    this.car = this.car.filter(car => car.id === parseInt(this.carId));
    this.car = this.car[0];
    // need to redirect if id is null
  }

  ngOnInit() {
  }

}
