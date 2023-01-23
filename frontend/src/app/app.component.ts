import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title:string = 'Gestionnaire hotel';
}


// export class AppComponent {
//   number = 0;
//   title = 'Mon projet angular';

//   checkNumber(number: number) {
//     if (number === 0) {
//       this.title = 'Mon projet angular entre dans la condition';
//     }
//   }
//   constructor() {
//     this.checkNumber(this.number);
//   }
// }
