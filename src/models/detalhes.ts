export class Detalhes {
  constructor(public id: string, public title: string ,public poster: string, public generos: string[]) {
    this.id = id;
    this.title = title;
    this.poster = poster;
    this.generos = generos;
  }
}
