import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  //Esta URL obtiene el listado de los usuarios en el backend.
  private baseURL="http://localhost:8080/api/v1/admins";

  constructor(private httpClient :HttpClient) { }


  obtenerListadeUsuario():Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}`);
  }

  registrarAdmin(admin:Admin):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,admin);
  }
  actualizarAdmin(id:number,admin:Admin):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,admin);

  }

  obtenerAdminId(id:number):Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/${id}`);

  }

  eliminarAdmin(id:number):Observable<Admin>{
    return this.httpClient.delete<Admin>(`${this.baseURL}/${id}`);
  }
}
