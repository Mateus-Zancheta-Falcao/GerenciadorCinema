import { Component, Input } from '@angular/core';
import { Filme } from 'src/models/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent {
    @Input() filme: Filme = new Filme("12","a","aa");
}
