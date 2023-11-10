import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  // below, we're adding a property called housingLocation of type HousingLocation
  // we're adding a "!" because the input is expecting a value to be passed, and there's no default value
  // "!" notifies the compiler that the value of the new property won't be null or undefined
  @Input() housingLocation!: HousingLocation;
}
