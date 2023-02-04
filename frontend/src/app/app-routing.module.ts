import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AjoutHotelComponent } from './ajout-hotel/ajout-hotel.component';
import { HomeComponent } from './home/home.component';
import { OpenaiGeneratorComponent } from './openai-generator/openai-generator.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path : 'openAi', component: OpenaiGeneratorComponent},
      { path : 'ajoutHotel', component: AjoutHotelComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
