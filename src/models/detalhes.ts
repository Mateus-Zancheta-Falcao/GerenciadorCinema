export class Detalhes {
  constructor(
    public id: string,
    public title: string,
    public poster: string,
    public overview: string,
    public vote_count: string,
    public video: string,
    public generos: string[]
  ) {
    this.id = id;
    this.title = title;
    this.poster = poster;
    this.overview = overview;
    this.vote_count = vote_count;
    this.video = video;
    this.generos = generos;
  }
}
