import { Component, OnInit } from '@angular/core';
import {CarsSettings} from "../../data/cars";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars = CarsSettings.CARS;

  constructor() { }

  ngOnInit() {
  }

}
