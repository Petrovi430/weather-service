import {Component, OnInit} from '@angular/core';
import {WeatherService} from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})

export class AppComponent implements OnInit {
  title = 'weather-service';
  data: {};
  defaultCity: Number = 710381;
  searchCity: String = '';
  isLoaded: Boolean = false;
  isError: Boolean = false;
  errorMessage: String = '';

  constructor(private  weatherService: WeatherService) { }

  private getWeather(city: String | Number) {
    this.weatherService.getCurrentWeather(city)
      .subscribe(
        (data: {}) => {
        this.data = data;
        this.isLoaded = true;
        this.isError = false;
        this.errorMessage = '';
      },
      (error) => {
          this.isLoaded = true;
          this.isError = true;
          this.errorMessage = error.error.message;
      }
    );
  }

  ngOnInit() {
    this.getWeather(this.defaultCity);
  }

  updateWeather(cityName: String) {
    if (cityName !== '') {
      this.isLoaded = false;
      this.searchCity = cityName;
      this.getWeather( this.searchCity);
    }
  }
}
