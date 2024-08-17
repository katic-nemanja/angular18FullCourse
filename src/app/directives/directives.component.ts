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
  
  logInCounter:number = 0;

  userRole:string = 'Gost u kuci';

  users:Array<string> = ['Nemanja', 'Jovan', 'Tamara', 'Natasa'];
  
  kliknuto() {
    this.isLoggedIn = !this.isLoggedIn;
  }


  attemptLogIn(){
    this.logInCounter++;
    console.log(this.logInCounter);
  }
}
