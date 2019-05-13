import { NgModule } from '@angular/core';
import {LoaderComponent} from './loader/loader.component';
import {WeatherService} from './service/weather.service';
import {API_KEY} from './app.config';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  providers: [
    WeatherService,
    { provide: API_KEY, useValue: 'f98e918186916d0289aa18b6f6ea687a' }
  ],
  exports: [LoaderComponent]
})
export class SharedModule {}
