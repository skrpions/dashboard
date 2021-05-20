import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../Modelos/rol.modelo';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  urlRegistrarRol = '/api/rol';  // Está es la ruta donde se envian los datos al backend
  // la urlbase "http://localhost:3000" está en proxy.conf.json

    // Inyecto el servicio de Http para hacer peticiones
  constructor(private http: HttpClient) {}

  // Envia las datos de acuerdo al Modelo hacia el Backend para que verifique si está o no en la BD
  RegistrarRol(rol:Rol)
  {
    return this.http.post(this.urlRegistrarRol, rol);
  }
}
