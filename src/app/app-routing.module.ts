import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaDescricaoComponent } from './pagina-descricao/pagina-descricao.component';

const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'pagina-descricao/:id', component: PaginaDescricaoComponent },
  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
