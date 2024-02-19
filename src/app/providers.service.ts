import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProvidersService {

  constructor(private http: HttpClient) { }

  getProviders(){
    return this.http.get<{id: number, name: string}[]>("/assets/providers.json");
  }


}
