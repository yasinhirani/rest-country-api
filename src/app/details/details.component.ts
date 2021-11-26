import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  name: any;
  details: any;
  currency: any;
  languages: any;

  constructor(private activated: ActivatedRoute, private country: CountryService) {
    this.activated.params.subscribe( params => {
      this.name = params.name;
    });
    this.getByName();
   }

  ngOnInit(): void {
  }

  getByName(){
    this.country.getByName(this.name).subscribe((res) => {
      this.details = res;
      this.currency = this.details[0].currencies;
      this.languages = this.details[0].languages;
    })
  }

}
