import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor() {}
  inputValue: number = 0;
  inputUnit: string = 'km';
  outputUnit: string = 'm';
  result: number = 0;

  convert() {
    const conversionRates: { [key: string]: number } = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
    };

    const valueInMeters = this.inputValue * conversionRates[this.inputUnit];
    this.result = valueInMeters / conversionRates[this.outputUnit];
  }
}
