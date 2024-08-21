import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // @Input() - oznacava varijablu koja moze vrednost da primi iz PARENT komponente
  @Input() postListTitle: string = '';
  @Input() postListIsLogin: boolean = false;

  childMessage: string = 'Ovo je poruka generisana iz CHILD componenta';
}
