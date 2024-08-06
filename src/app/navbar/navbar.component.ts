import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    standalone:true,
    templateUrl:'navbar.component.html',
    styleUrl:'navbar.component.css'
})

export class AppNavbar{
    city ="Veljka Vlahovica 27/10, 11550 Lazarevac";
    author="Nemanja Katic";
    porodica= "Natasa, Jovan i Tamara";
}
