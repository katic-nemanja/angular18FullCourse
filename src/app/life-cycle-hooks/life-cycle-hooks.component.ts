import { NgComponentOutlet } from '@angular/common';
import { Component, ViewContainerRef } from '@angular/core';
import { AppNavbar } from '../navbar/navbar.component';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})

export class LifeCycleHooksComponent {
  

  constructor(private viewContainer:ViewContainerRef){

  }
  loadComponent(){
    this.viewContainer.createComponent(AppNavbar);
  }

  removeComponent(){
    this.viewContainer.remove();}
}