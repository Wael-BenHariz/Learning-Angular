import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  mess:string='hello from parent'
  msgEnfant='';
  reciveMsg($event:string){
    this.msgEnfant=$event
  }
}
