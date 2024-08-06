import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angular 18 FullCourse';
  imgURL: string = 'https://image.petmd.com/files/styles/978x550/public/dog-allergies.jpg';
  imgURL2: string = 'https://cdn.theatlantic.com/thumbor/mVxQkCl7YPBtSBVBvo0BkSOTB-w=/249x0:1749x1125/1200x900/media/img/mt/2019/03/Dr._Puppers/original.jpg';
  isDisabled : boolean = true;
  isActive : boolean = true;
  fruit :string ='Apple';
}
