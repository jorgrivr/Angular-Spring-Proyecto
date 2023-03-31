import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit {
  admin: Admin=new Admin();
  constructor( private adminService:AdminService,private router:Router){

  }
  ngOnInit(): void {

  }

  onSubmit(){
    this.guardarAdmin();

  }

  guardarAdmin(){
    this.adminService.registrarAdmin(this.admin).subscribe(dato=>{
      console.log(dato);
      this.irListaAdmin();
    },error=>console.log(error));
   
  }

  irListaAdmin(){
    this.router.navigate(['/admins'])
  }

}
