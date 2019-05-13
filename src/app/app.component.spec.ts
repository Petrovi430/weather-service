import { TestBed, async } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {API_KEY} from './shared/app.config';
import {WeatherService} from './shared/service/weather.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchCityComponent,
        ShowWeatherComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        WeatherService,
        { provide: API_KEY, useValue: 'f98e918186916d0289aa18b6f6ea687a' }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'weather-service'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('weather-service');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to weather-service!');
  }));


});
