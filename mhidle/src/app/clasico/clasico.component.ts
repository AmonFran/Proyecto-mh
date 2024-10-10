import { Component, OnInit } from '@angular/core';
import { MonstruosService } from '../_services/monstruos.service';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Monstruo } from '../_models/monstruo.model';

@Component({
  selector: 'app-clasico',
  templateUrl: './clasico.component.html',
  styleUrls: ['./clasico.component.css']
})
export class ClasicoComponent implements OnInit {
  nombresControl = new FormControl("", Validators.required);
  nombres: string[] = [];
  nombresFiltrados!: Observable<string[]>;
  displayedColumns: string[] = ['nombre', 'clase', 'elemento'];
  dataSource: Monstruo[] = [];
  constructor(private monstruosService: MonstruosService) { }

  ngOnInit(): void {
    this.nombres = this.monstruosService.getNombres();
    this.nombresFiltrados = this.nombresControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarNombres(value || ''))
    );
  }

  private filtrarNombres(value: string): string[] {
    const filtroValor = value.toLowerCase();
    return this.nombres.filter(nombre => nombre.toLowerCase().includes(filtroValor));
  }

  adivinar(a: string | null) {
    if (a) {
      let azar = this.monstruosService.getAzar();
      if (this.nombres.includes(azar.nombre) && a != '') {
        if (azar.nombre.toLowerCase() == a.toLowerCase()) {
          alert("Acertaste");
        }
      }
      console.log(a);
    }
  }
}
