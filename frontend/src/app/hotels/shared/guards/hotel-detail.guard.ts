import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IHotel } from '../models/hotel';
import { HotelListService } from '../services/hotel-list.service';

@Injectable({
  providedIn: 'root',
})
export class HotelDetailGuard implements CanActivate {
  public hotels: IHotel[] = [];
  public errorMsg: string = '';

  constructor(
    private router: Router,
    private hotelListService: HotelListService
  ) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     console.log("ROUTE", route);
  //     // console.log("STATE", state);
  //     this.hotelListService.getHotels().subscribe({
  //       next: (hotels: IHotel[]) => {
  //         console.log("HOTELS FROM OBSERVABLE 55555555 =>", hotels.length);

  //         this.hotels = hotels;
  //         error : (err: any) => this.errorMsg = err
  //       }
  //     })
  //     console.log("Hotel length ? =>", this.hotels.length);

  //     const id: number = Number(route.paramMap.get('id'));

  //     if (isNaN(id) || id < 1 || id > this.hotels.length) {
  //       alert('Invalid hotel ID');
  //       this.router.navigate(['/hotels']);
  //       return false;
  //     }

  //   return true;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('ROUTE', route);
    this.hotelListService.getHotels().subscribe({
      next: (hotels: IHotel[]) => {
        console.log('HOTELS FROM OBSERVABLE 55555555 =>', hotels.length);

        this.hotels = hotels;
        this.checkHotelId(route);
      },
      error: (err: any) => {
        this.errorMsg = err;
        console.log('error =>', err);
      },
    });

    return true;
  }

  private checkHotelId(route: ActivatedRouteSnapshot): boolean {
    const id: number = Number(route.paramMap.get('id'));
    if (isNaN(id) || id < 1 || id > this.hotels.length) {
      alert('URL invalide');
      this.router.navigate(['/hotels']);
      return false;
    }
    return true
  }
}
