import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-hotel',
  templateUrl: './ajout-hotel.component.html',
  styleUrls: ['./ajout-hotel.component.css']
})
export class AjoutHotelComponent implements OnInit {

  private _email: string;

  ngOnInit() {
    this._email = '';
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
    console.log('email =>', this._email);
  }

}

