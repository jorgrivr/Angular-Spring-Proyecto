import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit {
  users:User[];

  constructor(private userService:UserService,private router: Router){}
  ngOnInit(): void {
    this.obtenerUser();
}

actualizarUser(id:number){
  this.router.navigate(['actualizar-user',id]);

}

eliminarUser(id:number){
  swal({
    title: '¿Estas seguro?',
    text: "Confirma si deseas eliminar al user",
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
      this.userService.eliminarUser(id).subscribe(dato => {
        console.log(dato);
        this.obtenerUser();
        swal(
          'User eliminado',
          'El user ha sido eliminado con exito',
          'success'
        )
      })
    }
  })

}
verDetallesUser(id:number){
  this.router.navigate(['user-detalles',id]);
}

private obtenerUser(){
  this.userService.obtenerListadeUsuario().subscribe(dato=>{
    this.users=dato;
  });
}



}
