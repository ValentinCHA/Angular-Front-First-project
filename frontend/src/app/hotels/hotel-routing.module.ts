import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelDetailComponent } from './hotel-details/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'hotels', component: HotelListComponent },
      {
        path: 'hotels/:id', component: HotelDetailComponent,
        canActivate: [HotelDetailGuard]
      },
    ]),
  ],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
