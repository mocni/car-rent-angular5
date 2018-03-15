import { Component, OnInit } from '@angular/core';
import {NavigationSettings} from "../data/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation = NavigationSettings.NAVIGATION;
  isVisible : boolean = false;
  constructor() {}
  ngOnInit() {
  }

  showNavigation(){
    this.isVisible = !this.isVisible;
  }
}
