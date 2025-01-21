import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  constructor() {}
  inputValue: number = 0;
  inputUnit: string | null = null; // Unidad seleccionada para entrada
  outputUnit: string | null = null; // Unidad seleccionada para salida
  result: number | null = null;

  // Función para realizar la conversión
  convert() {
    if (!this.inputUnit || !this.outputUnit) {
      this.result = null; // Si no se seleccionan unidades, el resultado es nulo
      return;
    }

    if (this.inputUnit === this.outputUnit) {
      this.result = this.inputValue; // No hay conversión si las unidades son iguales
    } else if (this.inputUnit === 'C' && this.outputUnit === 'F') {
      this.result = (this.inputValue * 9) / 5 + 32; // Celsius a Fahrenheit
    } else if (this.inputUnit === 'C' && this.outputUnit === 'K') {
      this.result = this.inputValue + 273.15; // Celsius a Kelvin
    } else if (this.inputUnit === 'F' && this.outputUnit === 'C') {
      this.result = ((this.inputValue - 32) * 5) / 9; // Fahrenheit a Celsius
    } else if (this.inputUnit === 'F' && this.outputUnit === 'K') {
      this.result = ((this.inputValue - 32) * 5) / 9 + 273.15; // Fahrenheit a Kelvin
    } else if (this.inputUnit === 'K' && this.outputUnit === 'C') {
      this.result = this.inputValue - 273.15; // Kelvin a Celsius
    } else if (this.inputUnit === 'K' && this.outputUnit === 'F') {
      this.result = ((this.inputValue - 273.15) * 9) / 5 + 32; // Kelvin a Fahrenheit
    }
  }

  // Función para seleccionar solo un checkbox en entrada
  selectInputUnit(unit: string) {
    this.inputUnit = unit;
  }

  // Función para seleccionar solo un checkbox en salida
  selectOutputUnit(unit: string) {
    this.outputUnit = unit;
  }
}
