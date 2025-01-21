import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor() {}
  inputValue: number = 0;
  inputUnit: string = 'kg';
  outputUnit: string = 'g';
  result: number = 0;

  convert() {
    const conversionRates: { [key: string]: number } = {
      ton: 1000000, // Tonelada (ton) a gramos
      kg: 1000, // Kilogramo (kg) a gramos
      g: 1, // Gramo (g)
      lb: 453.592, // Libra (lb) a gramos
    };

    // Convertimos el valor de entrada a gramos
    const valueInGrams = this.inputValue * conversionRates[this.inputUnit];
    // Convertimos de gramos a la unidad de salida seleccionada
    this.result = valueInGrams / conversionRates[this.outputUnit];
  }
}
