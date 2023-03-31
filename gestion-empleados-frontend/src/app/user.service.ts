import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Esta URL obtiene el listado de los usuarios en el backend.
  private baseURL="http://localhost:8080/api/v1/users";
  constructor(private httpClient :HttpClient) { }

  obtenerListadeUsuario():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  registrarUsuario(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }

  actualizarUser(id:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,user);

  }

  obtenerUserId(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);

  }

  eliminarUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(`${this.baseURL}/${id}`);
  } 


}
