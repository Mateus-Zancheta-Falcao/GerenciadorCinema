import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Filme } from 'src/models/filme';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private options = {
    headers: {
      accept: 'application/json',
      Authorization: environment.API_KEY,
    },
  };

  constructor(private http: HttpClient) {}

  public obterListaFilmes(): Observable<Filme[]> {
    const url =
      'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';

    return this.http.get(url, this.options).pipe(
      map((obj: any) => {
        return obj.results.map((filmeObj: any) => {
          return this.mapearFilme(filmeObj);
        });
      })
    );
  }

  public mapearFilme(obj: any): Filme {
    return new Filme(obj.id, obj.title, obj.poster_path);
  }

  public obterListaFilmesRecomendados(): Observable<Filme[]> {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';

    return this.http.get(url, this.options).pipe(
      map((obj: any) => {
        return obj.results.map((filmeObj: any) => {
          return this.mapearFilmeRecomendado(filmeObj);
        });
      })
    );
  }

  public mapearFilmeRecomendado(obj: any): Filme {
    return new Filme(obj.id, obj.title, obj.poster_path);
  }
}
