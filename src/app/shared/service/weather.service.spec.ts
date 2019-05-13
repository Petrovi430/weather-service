import {TestBed, async} from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {API_KEY} from '../app.config';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeatherService,
        { provide: API_KEY, useValue: 'f98e918186916d0289aa18b6f6ea687a' }
      ],
    }).compileComponents();
    weatherService = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it('getCurrentWeather() should http GET names', async(() => {
    const nameCity: String = 'Chudniv';
    const url: String = 'http://api.openweathermap.org/data/2.5/weather?id=710381&appid=f98e918186916d0289aa18b6f6ea687a&units=metric';

    weatherService.getCurrentWeather(710381).subscribe((data) => {
      expect(data).toEqual(nameCity);
    });

    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush(nameCity);
  }));

  it('should return an error when the server returns a 404', async(() => {
    const url: String = 'http://api.openweathermap.org/data/2.5/weather?id=710381&appid=f98e918186916d0289aa18b6f6ea687a&units=metric';
    const emsg = 'deliberate 404 error';

    spyOn(weatherService, 'getCurrentWeather').and.callThrough();

    weatherService.getCurrentWeather(710381).subscribe(
        data => fail('should have failed with the 404 error'),
        (error: HttpErrorResponse) => {
          expect(weatherService.getCurrentWeather).toHaveBeenCalled(); // check if executed
          expect(error.status).toEqual(404, 'status');
          expect(error.error).toEqual(emsg, 'message');
        }
    );

    const req = httpMock.expectOne(url);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  }));

});


