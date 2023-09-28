import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
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

    return this.http
      .get(url, this.options)
      .pipe(
        map((obj: any) => {
          return this.mapearFilme(obj);
        })
      )
      .pipe(
        switchMap((obj: Detalhes) => {
          return this.obterTrailerFilme(obj.id).pipe(
            map((obj2: string) => {
              obj.video = 'https://www.youtube.com/embed/' + obj2;
              return obj;
            })
          );
        })
      );
  }

  public obterTrailerFilme(id: string): Observable<string> {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;

    return this.http.get(url, this.options).pipe(
      map((obj: any) => {
        return this.mapearVideo(obj.results);
      })
    );
  }

  public mapearVideo(obj: any[]): string {
    return obj[0].key;
  }

  public mapearFilme(obj: any): Detalhes {
    return {
      id: obj.id,
      title: obj.title,
      poster: obj.poster_path,
      overview: obj.overview,
      vote_count: obj.vote_count,
      video: 'https://www.youtube.com/embed/' + obj.key,
      generos: obj.genres.map((genero: any) => genero.name),
    };
  }
}
