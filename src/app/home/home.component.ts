import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
// on line 21 above, the syntax is -- [attribute] = "value" -- to notify Angular that the assigned value should be treated as a property from the component class (line 30-39 below) and not a string value
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 1234,
    name: 'Pineapple Under The Sea',
    city: 'Bikini Bottom',
    state: 'BC',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false
  }
}
