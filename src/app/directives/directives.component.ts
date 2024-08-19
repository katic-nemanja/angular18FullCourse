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

  logInCounter: number = 0;

  userRole: string = 'unknown1';

  users: Array<string> = ['Nemanja', 'Jovan', 'Tamara', 'Natasa'];

  brojac:number = 1;


  // pozivamo se na tip Array-a kao Array<any> zato sto nemamo definisan interfejs objekta,
  // inace bi taj Array izgledao Array<ime interfejsa>, inace <any> gazi sva ta ogranicenja
  // govoreci aplikaciji da taj objekat moze biti bilo kog tipa
  usersObject: Array<any> = [
    { id: 1, name: 'Nemanja Katic', email: 'Nemanja@gmail.com' },
    { id: 2, name: 'Jovan', email: 'jovan@gmail.com' },
    { id: 3, name: 'Natasa', email: 'natasa@gmail.com' },
    { id: 4, name: 'Tamara', email: 'tamara@gmail.com' },
  ];

  kliknuto() {
    this.isLoggedIn = !this.isLoggedIn;
  }


  attemptLogIn() {
    this.logInCounter++;
    console.log(this.logInCounter);
  }

  dodajKorisnika(){
    let user:object = {id:4+this.brojac, name:'Korisnik'+this.brojac, email:'korisnik'+this.brojac+'@gmail.com'};
    this.usersObject.push(user);
    this.brojac++;
    }

    // u ovoj funkciji prvo trazimo index elementa, pa brisemo
  obrisiKorisnika(korisnikObject:object){
    let index: number = this.usersObject.indexOf(korisnikObject);
    this.usersObject.splice(index,1);
  }

  obrisiKorisnikaIndexom(index:number){
    this.usersObject.splice(index,1);
  }

  logIn(){
    let vrednost:any = document.querySelector("#inptText");
    this.userRole = vrednost.value;
  }
}
