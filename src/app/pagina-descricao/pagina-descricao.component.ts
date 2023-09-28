import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalhes } from 'src/models/detalhes';
import { DetalheService } from 'src/services/detalhes.service';

@Component({
  selector: 'app-pagina-descricao',
  templateUrl: './pagina-descricao.component.html',
  styleUrls: ['./pagina-descricao.component.css'],
})
export class PaginaDescricaoComponent {
  filmeDetalhes: Detalhes = new Detalhes("","","",[]);

  constructor(
    private filmeDetalhesService: DetalheService,
    private route: ActivatedRoute
  ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.filmeDetalhesService.obterFilmeDetalhes(id).subscribe((listFilme) => {
      console.log(listFilme);
      this.filmeDetalhes = listFilme;
    });
  }
}
