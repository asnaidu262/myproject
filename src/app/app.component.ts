import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angulr app ';
  isNewUserSelcted : boolean = false;
  selectNewUser(){
    this.isNewUserSelcted = true;
  }
}
