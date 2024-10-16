import { Injectable } from '@angular/core';
import { Monstruo } from '../_models/monstruo.model';

@Injectable({
  providedIn: 'root'
})
export class MonstruosService {
  monstruos: Monstruo[] = [
    new Monstruo(0, 'Lagriacus', 'Leviatan', 'Electrico', 'Monster Hunter 3'),
    new Monstruo(1, 'Anjanath', 'Wyvern bruto', 'Fuego', 'Monster Hunter World'),
    new Monstruo(2, 'Barroth', 'Wyvern bruto', 'Agua', 'Monster Hunter 3'),
    new Monstruo(3, 'Bazelgeuse', 'Wyvern volador', 'Fuego', 'Monster Hunter World'),
    new Monstruo(4, 'Deviljho', 'Wyvern bruto', 'Draco', 'Monster Hunter 3'),
    new Monstruo(5, 'Diablos', 'Wyvern volador', 'Ninguno', 'Monster Hunter'),
  ];

  // azar: Monstruo = this.monstruos[Math.floor(Math.random() * this.monstruos.length)];
  azar: Monstruo = this.monstruos[1];

  constructor() { }

  getMonstruos() {
    this.monstruos.sort((a, b) => {
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
      if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
      return 0
    })
    return this.monstruos.slice();
  }

  getNombres() {
    let nombres: string[] = [];
    this.monstruos.forEach((monstruo) => {
      nombres.push(monstruo.nombre);
    })
    nombres.sort();
    return nombres;
  }

  getAzar() {
    return this.azar;
  }

  getMonstruo(nombreMonstruo: string) {
    let monstruoBuscado: Monstruo = new Monstruo(0, "", "", "", "");
    this.monstruos.forEach((monstruo) => {
      if (monstruo.nombre == nombreMonstruo) monstruoBuscado = monstruo
    })
    return monstruoBuscado;
  }
}
