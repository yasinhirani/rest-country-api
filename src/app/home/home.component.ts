import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  originalCountries: any;
  countries: any;
  // darkMode: any;
  countryName: any;
  selectRegion: any;

  filterRegion = [
    {
      name: 'africa',
    },
    {
      name: 'america',
    },
    {
      name: 'asia',
    },
    {
      name: 'europe',
    },
    {
      name: 'oceania',
    },
  ];

  constructor(private country: CountryService) {
    this.getAllCountry();
    // this.darkMode = JSON.parse(localStorage.darkmode);
  }

  ngOnInit(): void {}

  // setDarkMode() {
  //   if (this.darkMode === false) {
  //     this.darkMode = true;
  //     localStorage.setItem('darkmode', JSON.stringify(this.darkMode));
  //   } else {
  //     this.darkMode = false;
  //     localStorage.setItem('darkmode', JSON.stringify(this.darkMode));
  //   }
  // }

  getAllCountry() {
    this.country.getAllCountry().subscribe((res) => {
      console.log(res);
      this.originalCountries = res;
      this.countries = this.originalCountries;
    });
  }

  filterCountry() {
    if (this.countryName) {
      this.countries = this.countries.filter((e: any) => {
        return e.name.common
          .toLocaleLowerCase()
          .match(this.countryName.toLocaleLowerCase());
      });
    } else {
      this.countries = this.originalCountries;
    }
  }

  selectedRegion(region: any) {
    console.log(region);
      this.countries = this.originalCountries.filter((e: any) => {
        return e.region
          .toLocaleLowerCase()
          .match(region.toLocaleLowerCase());
      });
  }

  getDetails(e: any){
    console.log(e);
  }
}
