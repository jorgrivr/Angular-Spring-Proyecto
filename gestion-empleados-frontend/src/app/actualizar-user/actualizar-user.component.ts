import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-actualizar-user',
  templateUrl: './actualizar-user.component.html',
  styleUrls: ['./actualizar-user.component.css']
})
export class ActualizarUserComponent implements OnInit {
  id:number;
  user:User = new User();
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.obtenerUserId(this.id).subscribe(dato =>{
      this.user = dato;
    },error => console.log(error));

  }

  irAListaAdmin(){
   this.router.navigate(['/admins']);
   swal('Usuario actualizado',`El usuario ${this.user.nombre} ha sido actualizado con exito`,`success`);
  }

  
onSubmit(){
  this.userService.actualizarUser(this.id,this.user).subscribe(dato=>{
    this.irAListaAdmin();
  },error=>console.log(error))
}

}