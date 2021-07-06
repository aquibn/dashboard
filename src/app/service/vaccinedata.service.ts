import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VaccinationData } from '../vaccinationsDataInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinedataService {
  private _url="http://localhost:4000/api/state";
  private _urla="http://localhost:4000/api/Punjab";
  private _urlb="http://localhost:4000/api/Sikkim"
  private _urlc="http://localhost:4000/api/Rajasthan"
  private _urld="http://localhost:4000/api/Telangana"
  private _urle="http://localhost:4000/api/up"
  private _urlf="http://localhost:4000/api/west";
  private _urlg="http://localhost:4000/api/tamil"
  constructor(private http: HttpClient) { }


telangana(){
  return this.http.get(this._urld)
}
westbengal():Observable<VaccinationData[]>{
 return this.http.get<VaccinationData[]>(this._urlf)
}
up(){
 return this.http.get(this._urle)
}
tamil(){
 return this.http.get(this._urlg)
}
punjab(){
 return this.http.get(this._urla)
}
sikkim(){
 return this.http.get(this._urlb)
}
raj(){
 return this.http.get(this._urlc)
}
districs(a:string){
 let url = this._url +`?state=${a}`
 return this.http.get(url)
}

}
