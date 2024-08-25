import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges {
  // ngOnChanges je LIFE CYCLE metod koji se ispaljuje kada neka @Input varijabla dozivi promenu
  
  @Input() profileUserName:string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On change triggered");
    
  }

}
