import { Component, OnInit } from '@angular/core';
import { MonstruosService } from '../_services/monstruos.service';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Monstruo } from '../_models/monstruo.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clasico',
  templateUrl: './clasico.component.html',
  styleUrls: ['./clasico.component.css']
})
export class ClasicoComponent implements OnInit {
  nombresControl = new FormControl("");
  nombres: string[] = [];
  nombresFiltrados!: Observable<string[]>;
  displayedColumns: string[] = ['nombre', 'clase', 'elemento'];
  dataSource: Monstruo[] = [];
  objetivo: Monstruo = this.monstruosService.getAzar();

  constructor(private monstruosService: MonstruosService) { }

  ngOnInit(): void {
    this.nombres = this.monstruosService.getNombres();
    this.nombresFiltrados = this.nombresControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarNombres(value || ''))
    );
    this.objetivo
  }

  private filtrarNombres(value: string): string[] {
    const filtroValor = value.toLowerCase();
    return this.nombres.filter(nombre => nombre.toLowerCase().includes(filtroValor));
  }

  adivinar(a: string | null) {
    if (a) {
      if (this.nombres.includes(this.objetivo.nombre) && a != '') {
        if (this.objetivo.nombre.toLowerCase() == a.toLowerCase()) {
          alert("Acertaste");
        }
        else {
          this.nombres.splice(this.nombres.indexOf(a), 1);
          this.dataSource.push(this.monstruosService.getMonstruo(a));
          this.dataSource = [...this.dataSource];
        }
      }
    }
    this.nombresControl.setValue("");
  }
}
