import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings-form';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }

  getEscolhas(): Observable<string[]> {
    return of(['um', 'dois', 'tres']);
  }

  postUserSettingForm(userSettings: UserSettings) : Observable<any> {
    
  return this.http.post('https://putsreq.com/1aBx8fDB35Ud8WpQGGIO', userSettings);
      
   }
}
