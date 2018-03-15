import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './modules/banner/banner.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CarsDetailsComponent } from './modules/cars-details/cars-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CarsComponent } from './pages/cars/cars.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'car/:id', component: CarsDetailsComponent },
  { path: '**', component: HomepageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    FooterComponent,
    HomepageComponent,
    CarsComponent,
    CarsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
