import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaDescricaoComponent } from './pagina-descricao/pagina-descricao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { SafePipe } from './pipes/safepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaDescricaoComponent,
    CardFilmeComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
