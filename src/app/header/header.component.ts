import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
slogan: string = "Your one stop shop for everything";
getSlogan(){
  return "This is the new slogan of the web application";
}

source: string = "/assets/images/asd.png";
}
