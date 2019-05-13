import {Component, Input} from '@angular/core';
import {fadeStateTrigger} from '../shared/animations/fade.animation';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css'],
  animations: [fadeStateTrigger]
})
export class ShowWeatherComponent {
  @Input() weatherInCity: {};
  @Input() isLoaded: Boolean;
  @Input() isError: Boolean;
  @Input() errorMessage: String;
}
