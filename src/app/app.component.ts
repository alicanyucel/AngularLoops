import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.componnet.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loops';
  meyve:string="";
  meyveler:string[]=["elma,armut,portakal,greyfut"];
  add(){
    this.meyveler.push(this.meyve);
  this.meyve="";
  }
}
