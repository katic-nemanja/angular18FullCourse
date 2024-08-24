import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // @Input() - oznacava varijablu koja moze vrednost da primi iz PARENT komponente
  @Input() postListTitle: string = '';
  @Input() postListIsLogin: boolean = false;

  porukaIzChilda: string = 'Ovo je poruka generisana iz CHILD componenta';

  porukaZaParent: string = 'Ovo je poruka koja ce biti poslata parentu koristeci click Event  - @Output';

  // metod za slanje podataka iz childa u Parent putem OUTPUT dekoratora
  // porukaEvent se prosledjuje PARENTU u html fajlu kao event unutar selektora child komponente - <app-posts-list (porukaEvent)="primiPoruku($event)"...</app-posts-list>
  // onda se tom eventu dodaje funkcija koja ce prihvatiti ono sto child emituje parentu 
  // this.porukaEvent.emit(this.porukaZaParent); - ovo je deo zaduzen za emitovanje, sta god da mu se prosledi, emitovace
  // pocetak
  @Output() porukaEvent = new EventEmitter();

  sendMessageToParent(){
    console.log('Dugme je kliknuto!!');
    this.porukaEvent.emit(this.porukaZaParent);
  }
  // kraj
}
