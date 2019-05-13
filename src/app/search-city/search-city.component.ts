import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as dataCity from '../shared/city.list.json';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {
  searchAutoCity = [];
  showList: Boolean = true;
  searchCity: String = '';
  @Output() cityName = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.showList = true;
    this.searchCity = form.value.name;
    this.cityName.emit(this.searchCity);
    this.searchAutoCity = [];
    form.reset();
  }

  valueChange(searchValue: String) {
    if (searchValue !== '') {
      this.searchAutoCity = dataCity.default.filter((item: {name: String}) => {
        return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
      });
    } else {
      this.searchAutoCity = [];
    }
  }

}
