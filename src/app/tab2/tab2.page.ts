import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor() {}
  inputValue: number = 0; // Valor inicial
  inputUnit: string | null = null; // Unidad de entrada seleccionada
  outputUnit: string | null = null; // Unidad de salida seleccionada
  result: number | null = null; // Resultado de la conversión

  // Función para realizar la conversión
  convert() {
    if (!this.inputUnit || !this.outputUnit) {
      this.result = null; // Validar que ambas unidades estén seleccionadas
      return;
    }

    // Tasa de conversión a gramos (unidad base)
    const conversionRates: { [key: string]: number } = {
      ton: 1000000, // Tonelada a gramos
      kg: 1000, // Kilogramo a gramos
      g: 1, // Gramo (base)
      lb: 453.592, // Libra a gramos
    };

    // Convertir el valor de entrada a gramos
    const valueInGrams = this.inputValue * conversionRates[this.inputUnit];
    // Convertir de gramos a la unidad de salida seleccionada
    this.result = valueInGrams / conversionRates[this.outputUnit];
  }

  // Métodos para seleccionar las unidades de entrada y salida
  selectInputUnit(unit: string) {
    this.inputUnit = unit;
    this.result = null; // Resetear el resultado al cambiar la unidad
  }

  selectOutputUnit(unit: string) {
    this.outputUnit = unit;
    this.result = null; // Resetear el resultado al cambiar la unidad
  }
}
