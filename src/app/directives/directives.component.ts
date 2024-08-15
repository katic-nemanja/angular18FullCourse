import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isLoggedIn: boolean = true;
  userName: string = "Nemanja Katic";
  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;
  kliknuto() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
