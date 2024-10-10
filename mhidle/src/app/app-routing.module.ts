import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasicoComponent } from './clasico/clasico.component';
import { MenuComponent } from './core/menu/menu.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'clasico', component: ClasicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
