import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Detalhes } from 'src/models/detalhes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetalheService {
  private options = {
    headers: {
      accept: 'application/json',
      Authorization: environment.API_KEY,
    },
  };

  constructor(private http: HttpClient) {}

  public obterFilmeDetalhes(id: number): Observable<Detalhes> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;

    return this.http.get(url, this.options).pipe(
      map((obj: any) => {
        console.log(obj);
          return this.mapearFilme(obj);
      })
    );
  }

  public mapearFilme(obj: any): Detalhes {
    return new Detalhes(
      obj.id,
      obj.title,
      obj.poster_path,
      obj.genres.map((genero: any) => genero.name)
    );
  }
}
