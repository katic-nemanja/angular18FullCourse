import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from "./directives/directives.component";
import { PostsListComponent } from "./posts-list/posts-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, DirectivesComponent, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// implements AfterViewInit je HOOK koji se koristi da bi se nesto renderovalo tek kada se svaki VIEW ucita
export class AppComponent implements AfterViewInit {
  title: string = 'angular 18 FullCourse';
  imgURL: string = 'https://image.petmd.com/files/styles/978x550/public/dog-allergies.jpg';
  imgURL2: string = 'https://cdn.theatlantic.com/thumbor/mVxQkCl7YPBtSBVBvo0BkSOTB-w=/249x0:1749x1125/1200x900/media/img/mt/2019/03/Dr._Puppers/original.jpg';
  isDisabled : boolean = true;
  isActive : boolean = true;
  fruit :string ='Apple';
  id:string = "input333";
  izTsFajlaStil:string = 'dimenzije active';

  userName:string = 'Nemanja Katic';

  // data flow varijable
  appPostListTitle: string= 'Post broj 1';
  appIsLogin:boolean = true;

  // @ViewChild(PostsListComponent) porukaIzChilda:any - ovo predstavlja deklarisanje varijable koja se vezuje za instancu
  // Child komponente, preko koje pristupamo svim varijablama iz Childa unutar PARENTA
  @ViewChild(PostsListComponent) childComponent:any;
  preuzetaPorukaIzChilda:string = '';


  constructor(){
    console.log(this.childComponent);
  }

  // ovo je metod koji je direktno vezan za "implements AfterViewInit" i predstavlja 
  // LIFE CYCLING HOOK koji obradjuje podatke onda kada se kompletan VIEW aplikacije ucita
  ngAfterViewInit() {
    console.log(this.childComponent.porukaIzChilda);
    this.preuzetaPorukaIzChilda = this.childComponent.porukaIzChilda;
  }

  // prijem podataka iz CHILD komponente, koristeci OUTPUT dekorator
  // pocetak
  porukaIzChildaPrekoOutputa:string = '';

  primiPoruku(message:any){
    console.log(message);
    this.porukaIzChildaPrekoOutputa = message;
  }
  // kraj

  

  btnClick():void{
    this.isActive?this.isActive=false:this.isActive=true;
  }

  // da bismo u event objetku prisli svim poljima, moramo event objekat da definisemo kao "ANY" type, a ne kao OBJECT, iako to jeste
keyPress(event:any){
  event.keyCode==13?alert('upravo ste kliknuli Enter'):alert(`upravo ste kliknuli dugme ${event.key}`)
  console.log(event);
}


keyPressCtrl(event:any){
  alert(event.key);
  console.log(event);
  let inpt:any = document.querySelector('#input333');
  inpt.value = "nova vrednost!!";
}

keyPressEnter(user:HTMLInputElement){
  console.log(user.id + user.className);
  user.value = "Promena vrednosti iz TS fajla";
}


changeUserName(kontrola:HTMLInputElement){
  console.log(`Pre promene > ${this.userName}`);
  
  this.userName = kontrola.value;
  console.log(`Posle promene > ${this.userName}`);
  
}

}

