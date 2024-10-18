import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { MonstruosService } from './_services/monstruos.service';

@Injectable()
export class ConectarAppService {

    constructor(private http: HttpClient, private monstruosService: MonstruosService) {

    }

    cargarTodo() {
        return this.http.get(`${environment.apiUrl}`).subscribe(
            (response: any) => {
                console.log(response);
                this.monstruosService.cargarMonstruos(response);
            }
        );
    }
}
