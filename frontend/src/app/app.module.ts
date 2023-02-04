import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpenaiGeneratorComponent } from './openai-generator/openai-generator.component';
import { HotelModule } from './hotels/hotel.module';
import { AppRoutingModule } from './app-routing.module';
import { AjoutHotelComponent } from './ajout-hotel/ajout-hotel.component';




registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenaiGeneratorComponent,
    AjoutHotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,
    HttpClientModule,
    HotelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
