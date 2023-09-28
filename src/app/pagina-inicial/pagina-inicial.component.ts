import { Component } from '@angular/core';
import { Filme } from 'src/models/filme';
import { FilmeService } from 'src/services/filme.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent {
  listaFilmes: Filme[] = [];
  listaFilmesRecomendados: Filme[] = [];

  constructor(private filmeService: FilmeService) {
    this.filmeService
      .obterListaFilmes()
      .subscribe((listFilme) => (this.listaFilmes = listFilme));

    this.filmeService
      .obterListaFilmesRecomendados()
      .subscribe(
        (listFilmeRecomendado) =>
          (this.listaFilmesRecomendados = listFilmeRecomendado)
      );
  }
}
