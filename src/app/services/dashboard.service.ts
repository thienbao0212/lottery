import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
    configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }
  

    // getData(from: any, to: any) {
    getData() {
        // return this.http.get<any>('https://nosy-beaded-cloak.glitch.me/api/lotterys/getAll?from='+from+'&to='+to);
        return this.http.get<any>('https://nosy-beaded-cloak.glitch.me/api/lotterys/getAll');
    }
}