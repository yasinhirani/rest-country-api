import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAllCountry(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getByName(name: any){
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  getByRegion(region: any){
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }
}
