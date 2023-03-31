import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-actualizar-admin',
  templateUrl: './actualizar-admin.component.html',
  styleUrls: ['./actualizar-admin.component.css']
})
export class ActualizarAdminComponent implements OnInit {
  id:number;
  admin:Admin = new Admin();
  constructor(private adminService:AdminService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminService.obtenerAdminId(this.id).subscribe(dato =>{
      this.admin = dato;
    },error => console.log(error));

  }

  irAListaAdmin(){
   this.router.navigate(['/admins']);
   swal('Admin actualizado',`El admin ${this.admin.nombre} ha sido actualizado con exito`,`success`);
  }

  
onSubmit(){
  this.adminService.actualizarAdmin(this.id,this.admin).subscribe(dato=>{
    this.irAListaAdmin();
  },error=>console.log(error))
}

}
