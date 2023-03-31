import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import swal from 'sweetalert2';


@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent {
    id:number;
    user:User;
  
    constructor(private route:ActivatedRoute,private userService:UserService){
  
  
    }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
          this.user=new User();
          this.userService.obtenerUserId(this.id).subscribe(dato =>{
            this.user=dato;
            swal(`Detalles del Empleado ${this.user.nombre}`);
          })
  
    }
}
