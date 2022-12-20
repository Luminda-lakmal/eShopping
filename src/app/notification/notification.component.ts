import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success"><p>Lorem ipsum dolor sit</p><div class="close"><button class="btn" (click)="closeNotification()">x</button></div></div>' ,
  styles: ["div{margin: 10px 0px; padding:10px 20px; background-color: #fad7a0; text-align: center}","p{font-size:14px}"]
})
export class NotificationComponent {
displauNotification: boolean = false;

closeNotification(){
  this.displauNotification = true;
}
}
