import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listar-admin',
  templateUrl: './listar-admin.component.html',
  styleUrls: ['./listar-admin.component.css']
})
export class ListarAdminComponent implements OnInit {
  admins:Admin[];

    constructor(private adminService:AdminService,private router:Router){

    }

    ngOnInit(): void {
      this.obtenerAdmin();
      this.actualizarAdmin

      
    }

    actualizarAdmin(id:number){
      this.router.navigate(['actualizar-admin',id]);
    
    }
    
    eliminarAdmin(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al admin",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.adminService.eliminarAdmin(id).subscribe(dato => {
            console.log(dato);
            this.obtenerAdmin();
            swal(
              'Admin eliminado',
              'El admin ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    
    
    }
    private obtenerAdmin(){
    this.adminService.obtenerListadeUsuario().subscribe(dato=>{
    this.admins=dato
    });
      
}
verDetallesAdmin(id:number){
  this.router.navigate(['admin-detalles',id]);
}

}