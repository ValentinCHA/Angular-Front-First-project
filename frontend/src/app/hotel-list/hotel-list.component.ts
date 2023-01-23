import { Component, OnInit } from '@angular/core';
import { ReversePipe } from 'ngx-pipes';
import { IHotel } from './hotel';
import { HotelListService } from './hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: [ReversePipe]
})


export class HotelListComponent implements OnInit {

  public title: string = 'Liste d\'hôtels';

  public hotels: IHotel[] = [];

  public showBadge: boolean;

  private _hotelFilter: string;

  public filteredHotels: IHotel[] = [];

  public recieveRating: string;

  public errorMsg: string;

  constructor(private hotelListService: HotelListService) { }

  ngOnInit(): void {
    console.log('Initialisation du composant');

    this.hotelListService.getHotels().subscribe({
      next: (hotels: IHotel[]) => {
        console.log("HOTELS FROM OBSERVABLE =>", hotels);

        this.hotels = hotels;
        this.filteredHotels = this.hotels;
        error : (err: any) => this.errorMsg = err
      }
    })

    this.hotelFilter = '';
   }

   public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    console.log('JE SUIS LE FILTER =>>', filter);
    console.log("THIS_HOTELFILTER =>>", this._hotelFilter);
    console.log("THIS  HOTELFILTER =>>", this._hotelFilter);
    console.log("THIS FILTERED HOTELS ==> ", this.filteredHotels);

    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  private filterHotels(criteria: string): IHotel[] {
    return this.hotels.filter((hotel: IHotel) => hotel.hotelName.toLowerCase().includes(criteria.toLowerCase()))
  }

  public recieveRatingClick(message: string): void {
    console.log('event =>', message);
    console.log('recieveRating =>', this.recieveRating);

    this.recieveRating = message;
    console.log('recieveRating =>', this.recieveRating);

  }

}
